"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type Status = "idle" | "submitting" | "success" | "error";

const PROFESSION_KEYS = [
  "reflexologue",
  "osteopathe",
  "kinesitherapeute",
  "infirmier",
  "medecin",
  "etudiant",
  "particulier",
  "autre",
] as const;

export function LeadCapture() {
  const t = useTranslations("home");
  const f = useTranslations("lead_form");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "homepage_lead_capture" }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "unknown");
      setStatus("error");
    }
  }

  return (
    <section className="border-y border-ink-soft/20 bg-parchment-dark/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-20 lg:px-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">{t("lead_eyebrow")}</p>
          <h2
            className="mt-4 font-display text-3xl leading-tight tracking-tight md:text-4xl"
            dangerouslySetInnerHTML={{ __html: t.raw("lead_title_html") as string }}
          />
          <p className="mt-6 text-base leading-relaxed text-ink-muted">{t("lead_body")}</p>
        </div>

        <div className="lg:col-span-7">
          {status === "success" ? (
            <p className="border-l-2 border-sage bg-parchment-light p-6 font-display text-lg italic text-ink">
              {f("success")}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label={f("name")} name="name" type="text" required />
                <Field label={f("email")} name="email" type="email" required />
              </div>

              <div>
                <label htmlFor="profession" className="eyebrow mb-2 block">
                  {f("profession")}
                </label>
                <select
                  id="profession"
                  name="profession"
                  required
                  defaultValue=""
                  className="w-full border-b border-ink-soft/40 bg-transparent py-3 font-display text-lg text-ink focus:border-sage focus:outline-none"
                >
                  <option value="" disabled>
                    {f("profession_placeholder")}
                  </option>
                  {PROFESSION_KEYS.map((key) => (
                    <option key={key} value={key}>
                      {f(`profession_options.${key}`)}
                    </option>
                  ))}
                </select>
              </div>

              <label className="flex items-start gap-3 text-sm text-ink-muted">
                <input
                  type="checkbox"
                  name="consent"
                  value="yes"
                  required
                  className="mt-1 h-4 w-4 accent-sage"
                />
                <span>{f("consent")}</span>
              </label>

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center rounded-lg bg-sage px-8 py-3 text-sm font-medium tracking-wide text-parchment-light transition-colors hover:bg-sage-deep disabled:opacity-60"
                >
                  {status === "submitting" ? f("submitting") : f("submit")}
                </button>
                {status === "error" && (
                  <p className="text-sm text-oxblood-deep">
                    {f("error")} {error ? <span className="font-mono text-xs">({error})</span> : null}
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow mb-2 block">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border-b border-ink-soft/40 bg-transparent py-3 font-display text-lg text-ink placeholder:text-ink-soft focus:border-sage focus:outline-none"
      />
    </div>
  );
}
