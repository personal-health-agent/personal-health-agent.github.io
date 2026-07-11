# BINF 4070 / COMS 4995 W008 — Course Website

Static, single-page course site for **The Future of Personal Health Assistant: Multimodal Health Data Management Agents**, jointly offered by Columbia DBMI and Columbia CS.

**Live site:** https://personal-health-agent.github.io/

Built with [Astro](https://astro.build). All editable content lives in markdown, so you should not need to touch a `.ts` or `.astro` file to update text on the site.

---

## Quick start

```bash
npm install
npm run dev      # local at http://localhost:4321
npm run build    # static site -> ./dist
npm run preview  # serve the built site locally
```

Requires Node 20+.

---

## Editing content

Everything you normally change lives under `src/content/`. Each file is markdown with a small YAML frontmatter block on top and prose underneath.

```
src/content/
├── course/course.md      # course identity, term, meeting time, survey link, highlights, About prose
├── prereqs/prereqs.md    # "Who's a fit" copy + recommended course lists (CS / health / design)
├── project/project.md    # final project description
├── grading/grading.md    # the grading table
├── instructors/*.md      # one file per instructor
├── policies/*.md         # one per policy (AI use, privacy, devices, collaboration, ...)
└── weeks/*.md            # one file per week; drives the schedule table
```

`src/content/config.ts` defines the schema for every file. If you add an unknown field or miss a required one, `npm run build` tells you exactly what is wrong.

### The schedule table

Each file in `src/content/weeks/` is one row of the schedule.

```yaml
---
week: 4                    # week number
date: "Oct 2"              # Friday date; rendered as "Week 4 · Oct 2"
title: "..."               # the Topic column
objective: "..."           # the Learning objective column
readings:                  # the Readings column; the title is displayed, link is optional
  - { title: "Key challenges for delivering clinical impact with AI",
      authors: "Kelly et al.", venue: "BMC Medicine", year: 2019,
      link: "https://doi.org/10.1186/s12916-019-1426-2" }
status: planned
---
```

Week 12 is the Thanksgiving break row and uses `isBreak: true` (no objective or readings).

The **Slides** column is intentionally empty. Add links there as decks become ready.

### House style

- **Student-facing voice.** Say what students will do and learn, not what the instructor will cover.
- **No em-dashes.**
- **Do not name guest speakers or judges** until they are confirmed.
- Internal details that should not be public (grading mechanics, unfilled placeholders) belong in the course repo's `teaching-team-notes.md`, not here.

---

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

The workflow **auto-detects** the public URL and base path from the GitHub Pages API, so it adapts to repo renames, custom domains, and project-vs-org sites without code changes. Because this repo is named `personal-health-agent.github.io` (an organization site), it is served at the root with base path `/`.

**One-time setup:** repo Settings → Pages → set *Source* to **GitHub Actions**.

To override the detected values, add repository Variables (Settings → Secrets and variables → Actions → Variables):

- `SITE_URL` — origin only, e.g. `https://example.com`
- `BASE_PATH` — mount path, e.g. `/` or `/some-prefix`

To preview locally exactly as deployed:

```bash
SITE_URL="https://personal-health-agent.github.io" BASE_PATH="/" npm run build
```

Internal links and assets must go through `withBase()` (`src/utils/url.ts`) so they keep working under the base path.

---

## Credits

The favicon (`public/favicon.svg`) is the Columbia University crown, derived from
[Columbia College of Columbia University Crown 2020.svg](https://commons.wikimedia.org/wiki/File:Columbia_College_of_Columbia_University_Crown_2020.svg)
by Acollevecchio, used under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
The viewBox was tightened to crop the "1754" date.

Sponsor logos in `public/sponsors/` belong to their respective organizations.

## License

Site source code is released under the MIT License. Course materials remain the property of the instructors.
