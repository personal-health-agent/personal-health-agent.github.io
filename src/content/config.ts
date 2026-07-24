import { defineCollection, z } from 'astro:content';

// Reusable sub-schemas

const reading = z.object({
  title: z.string(),
  authors: z.string().optional(),   // short form for the schedule cell, e.g. "Bent et al."
  venue: z.string().optional(),
  year: z.union([z.number(), z.string()]).optional(),
  link: z.string().optional(),
  type: z.enum(['paper', 'book', 'chapter', 'tutorial', 'docs', 'tool', 'video']).default('paper'),
  optional: z.boolean().default(false),
});

const courseRef = z.object({
  code: z.string(),
  title: z.string(),
  skill: z.string(),
});

// ---- Collections ----

// One file: src/content/course.md
// Body = the description prose. Frontmatter = course identity + highlights.
const course = defineCollection({
  type: 'content',
  schema: z.object({
    code: z.string(),
    crossListed: z.string().optional(),
    shortName: z.string().optional(),   // browser tab + nav label; avoids privileging one course number
    title: z.string(),
    subtitle: z.string(),
    term: z.string(),
    location: z.string().optional(),
    credits: z.number().optional(),
    duration: z.string().optional(),
    format: z.string().optional(),
    audience: z.string().optional(),
    meetingPattern: z.string().optional(),
    surveyUrl: z.string().optional(),        // interest / pre-admission survey
    surveyDeadline: z.string().optional(),   // human-readable deadline, e.g. "Friday, September 11, 11:59 PM ET"
    highlights: z.array(z.string()).default([]),
  }),
});

// One file: src/content/prereqs.md
// Body = the lead "Who's a fit" prose.
// Frontmatter = the structured course lists (by track) and Q&A.
const prereqs = defineCollection({
  type: 'content',
  schema: z.object({
    csCourses: z.array(courseRef).default([]),
    healthCourses: z.array(courseRef).default([]),
    designCourses: z.array(courseRef).default([]),
    questions: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
  }),
});

// One file: src/content/project.md
// Body = the final project summary prose.
// Frontmatter = required components + example tracks.
const project = defineCollection({
  type: 'content',
  schema: z.object({
    components: z.array(z.object({ label: z.string(), optional: z.boolean().default(false) })).default([]),
    showcase: z.array(z.string()).default([]),
    examples: z
      .array(z.object({ name: z.string(), blurb: z.string() }))
      .default([]),
  }),
});

// One file: src/content/grading.md
// Body = a markdown table (component | weight | notes).
const grading = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().default('Grading'),
  }),
});

// One file per instructor: src/content/instructors/NN-name.md
// Body = the bio prose. Frontmatter = name, role, affiliation, contact, ordering.
const instructors = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    affiliation: z.string(),
    homepage: z.string().optional(),
    email: z.string().optional(),
    order: z.number().default(0),
  }),
});

// One file per policy: src/content/policies/NN-slug.md
// Body = the policy text. Frontmatter = title + ordering.
const policies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number().default(0),
  }),
});

// One file per section: src/content/project-details/NN-slug.md
// Rendered in order on the /project-details page (milestones, formats,
// deliverables, grading). Same shape as policies: body = prose, frontmatter
// = title + ordering.
const projectDetails = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number().default(0),
  }),
});

// One file per week: src/content/weeks/NN-slug.md
// Rendered as a single glanceable schedule table row. Keep each week to one
// learning objective plus its assigned pre-readings; detail lives in the
// course materials, not here.
const weeks = defineCollection({
  type: 'content',
  schema: z.object({
    week: z.number().int().min(1).max(20),
    date: z.string(),                 // Friday, e.g. "Sep 11"
    title: z.string(),
    objective: z.string().default(''),
    readings: z.array(reading).default([]),
    isBreak: z.boolean().default(false),
    status: z.enum(['planned', 'draft', 'published']).default('planned'),
  }),
});

export const collections = { course, prereqs, project, grading, instructors, policies, weeks, 'project-details': projectDetails };
