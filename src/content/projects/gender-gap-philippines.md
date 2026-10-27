---
title: Mapping Gender Parity in the Philippines
short: Gender Parity PH
tagline: A data visualizer and research report on where Filipino women lead and trail men, built from public Philippine Statistics Authority data.
role: Data Analyst & Developer
period: Oct 2026
sort: 202610
group: built
built: A Python pipeline that cleans and validates public PSA tables with pandas, analyzes them with SciPy, and draws ten Matplotlib and seaborn charts into a research report, served by Flask and published to GitHub Pages as a static site.
outcome: A public report with live charts, the data behind every figure, and downloadable cleaned data.
stack: [Python, pandas, SciPy, Matplotlib, seaborn, Flask, Jinja, Bootstrap, GitHub Actions, GitHub Pages]
github: https://github.com/msimonb05/gender-gap-philippines
live: https://msimonb05.github.io/gender-gap-philippines/
liveLabel: Read the report
preview: [03-wage-gap, 04-scorecard, 06-dark-mode]
screenshots:
  01-report: "The report: title, abstract and a table of contents that follows the section you're reading."
  02-quick-summary: "Quick summary: four headline findings, with the numbers read straight from the data."
  03-wage-gap: "The gender wage gap in each region, with the national value as a dashed line."
  04-scorecard: "The gender parity scorecard: female-to-male ratios on a log scale, where 1.0 is parity."
  05-show-data: "Every figure can show the table behind it, here functional literacy by region and sex."
  06-dark-mode: "Dark mode follows the system setting, and every chart is redrawn in the dark palette."
  07-about: "About: an APA 7 citation with a copy button and a glossary of the terms used."
  08-mobile: "On phones: the report, the regional wage gap and the parity scorecard."
---

## The problem

Global indexes rank the Philippines high on gender equality: 20th of 148 economies in the Global Gender Gap Report 2025. One score can hide gaps that run in opposite directions, though. Filipino women lead men on some indicators and trail them on others.

## What I did

I collected public Philippine Statistics Authority (PSA) tables on labor, wages, literacy, school enrollment and poverty, and wrote a Python pipeline that cleans them with pandas. Each table is checked by recomputing its published values, and missing values are dropped rather than filled in.

On the cleaned data, I ran analyses whose settings were fixed in code before any results were computed: female-to-male parity ratios, a shift-share decomposition of labor force growth, linear trends with 95% confidence intervals, a seasonal profile, and Spearman correlations across regions with bootstrap intervals and Holm correction (SciPy).

The findings are written up as a research report with ten Matplotlib and seaborn visualizations and APA 7 references. A Flask app renders it with charts drawn for light and dark mode, citation tooltips, the data behind each figure and a quick summary of the key findings. A build script exports it as a static site, which GitHub Actions deploys to GitHub Pages.

## Outcome

Women lead in functional literacy (74.1% against 67.6% in 2024) and earn 5.8% more among full-time wage workers, but trail most in labor force participation (53.4% against 74.6% in 2025). Population growth, not higher participation, explains most of the growth in women's labor force since 2006. The report, its charts and the cleaned data are public.
