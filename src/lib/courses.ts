import courses from "@/data/courses.json";
import type { Specialty } from "./specialties";

export type CourseType = "base" | "postgrad" | "initiation";

export type Cycle = {
  city: string;
  start_date: string;
  end_date: string;
  price: string;
  registration_open: boolean;
  seats_total?: number;
  seats_remaining?: number;
  contact_name?: string;
  contact_email?: string;
  contact_phone?: string;
};

export type Course = {
  id: string;
  slug: string;
  type: CourseType;
  title: string;
  subtitle?: string;
  summary: string;
  full_description?: string;
  specialty_tags: Specialty[];
  prerequisites: string[];
  agrement?: string;
  cycles: Cycle[];
};

const all = courses as unknown as Course[];

export function allCourses(): Course[] {
  return all;
}

export function postgrads(): Course[] {
  return all.filter((c) => c.type === "postgrad");
}

export function initiations(): Course[] {
  return all.filter((c) => c.type === "initiation");
}

export function baseCourse(): Course | undefined {
  return all.find((c) => c.type === "base");
}

export function findCourse(slug: string): Course | undefined {
  return all.find((c) => c.slug === slug);
}

export function findPostgrad(slug: string): Course | undefined {
  return all.find((c) => c.type === "postgrad" && c.slug === slug);
}

/** All cycles across all courses, sorted by start date ascending. */
export function allUpcomingCycles(now = new Date()): Array<Cycle & { course: Course }> {
  const out: Array<Cycle & { course: Course }> = [];
  for (const c of all) {
    for (const cy of c.cycles) {
      if (new Date(cy.end_date) >= now) out.push({ ...cy, course: c });
    }
  }
  return out.sort(
    (a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime(),
  );
}

export function formatDateRange(start: string, end: string, locale = "fr-FR") {
  const s = new Date(start);
  const e = new Date(end);
  const fmt = (d: Date) =>
    d.toLocaleDateString(locale, { day: "numeric", month: "long" });
  if (s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear()) {
    return `${s.getDate()} – ${fmt(e)} ${s.getFullYear()}`;
  }
  return `${fmt(s)} – ${fmt(e)} ${s.getFullYear()}`;
}
