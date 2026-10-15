---
title: 'markymatics: Personal Portfolio'
short: markymatics
tagline: 'This website: a personal portfolio built with Astro and Tailwind CSS, including an interactive background and a dedicated page for each project.'
role: Yours truly, the Developer
period: Oct 2026 – Present
sort: 202610
group: built
built: A static Astro site styled with Tailwind CSS, with an animated canvas background, a photo slideshow with a glitch effect, and project pages generated from Markdown content collections, deployed on Cloudflare Pages.
stack: [Astro, Tailwind CSS, JavaScript, Bun, Cloudflare Pages]
github: https://github.com/msimonb05/markymatics
live: https://markymatics.pages.dev/
screenshots:
  01-hero: "The opening screen."
  02-intro: "Introduction: name, role, a short statement and social links."
  03-projects: "Projects: what I led and what I built on each team."
  04-project-page: "A project page: role, team, dates, tech stack and write-up."
  05-skills: "Skills grouped by area, with logos."
  06-mobile: "On phones: the opening screen, introduction and projects."
---

## The project

This portfolio is the site you are reading. I designed and built it from scratch in Astro, with a dark theme drawn from a seven-color palette and balanced with the 60-30-10 rule.

## What I did

- The background is a canvas grid of aqua squares. Streaks of light fall down the columns in stepped motion, background squares fade in and out, and squares near the cursor light up as it moves.
- The introduction rotates through photos with a crossfade, and swapping my name for my nickname triggers a glitch effect in the palette's colors.
- Each project is a Markdown file in an Astro content collection with a validated schema, and every project gets its own generated page.
- Typography follows a six-step type scale defined in the Tailwind theme, and the layout adapts from 320-pixel phones to wide desktop screens.

The site is built as static pages and served from Cloudflare Pages, with Bun as the package manager.
