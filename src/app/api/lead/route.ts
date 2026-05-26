import { NextResponse } from "next/server";

// Lead form forwarder. The form on the homepage POSTs here; we forward
// to the configured webhook (a Google Apps Script doPost endpoint that
// appends a row to a Google Sheet).
//
// Set LEAD_WEBHOOK_URL in Vercel project env (Production + Preview).
// The Apps Script is expected to accept JSON via doPost(e) and write
// e.postData.contents into the target sheet.

export const runtime = "edge";

type LeadPayload = {
  name?: string;
  email?: string;
  profession?: string;
  consent?: string;
  source?: string;
};

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (!body.email || !body.name || body.consent !== "yes") {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  const webhook = process.env.LEAD_WEBHOOK_URL;
  const payload = {
    ...body,
    submitted_at: new Date().toISOString(),
    user_agent: request.headers.get("user-agent") ?? "",
  };

  // No webhook configured yet — accept the submission so the UI doesn't
  // error in early environments, and log server-side. Once you set
  // LEAD_WEBHOOK_URL in Vercel, submissions start landing in the Sheet.
  if (!webhook) {
    console.warn("[lead] LEAD_WEBHOOK_URL not set — accepting submission without persistence", payload);
    return NextResponse.json({ ok: true, persisted: false });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // Apps Script webhooks return 302 to a content URL; follow redirects.
      redirect: "follow",
    });
    if (!res.ok) {
      console.error("[lead] webhook returned", res.status);
      return NextResponse.json({ error: "webhook_failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true, persisted: true });
  } catch (err) {
    console.error("[lead] webhook threw", err);
    return NextResponse.json({ error: "webhook_threw" }, { status: 502 });
  }
}
