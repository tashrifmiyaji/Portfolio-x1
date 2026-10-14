# Tashrif Miyaji Portfolio

A responsive developer portfolio built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Project structure

```text
src/
  app/
    globals.css                 # Shared global styles and responsive layout
    skills.css                  # Skill card layout and animations
    projects.css                # Project card layout and animations
    cursor-effects.css          # Cursor glow and ambient light
    motion.css                  # Reusable scroll reveals and site-wide motion
    layout.tsx                  # Root layout and page metadata
    page.tsx                    # Home page composition
  components/
    portfolio/
      about-section.tsx         # About section
      contact-section.tsx       # Contact information
      hero-section.tsx          # Intro, profile image, and primary links
      cursor-glow.tsx           # Subtle pointer-following ambient light
      journey-section.tsx       # Education and experience
      project-modal.tsx         # Project details dialog
      projects-section.tsx      # Project cards and dialog state
      section-heading.tsx       # Shared section heading
      site-footer.tsx           # Footer
      site-header.tsx           # Desktop and mobile navigation
      skills-section.tsx        # Categorized skill cards with icons
      social-strip.tsx          # Expertise summary strip
  data/
    portfolio.ts                # Navigation, social links, skills, and projects
```

Edit the matching section component for layout or text changes. Update `src/data/portfolio.ts` to change project, skill, navigation, or social-link data. Project preview images live in `public/`; project records include their image paths and repository links. Shared colors, typography, responsive behavior, and animations are in `src/app/globals.css`.

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Deploy to Netlify

Import this repository in Netlify and use `npm run build` as the build command. Netlify detects the Next.js app and configures its Next.js runtime automatically; do not set the publish directory to the repository root. The downloadable resume is served from `public/TASRIF_Resume.pdf`.
