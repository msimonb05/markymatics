---
title: 'SRLAAS: Service Records, Leaves Application and Approval System'
short: SRLAAS
tagline: A division-wide portal that replaces paper service records for the 5,000+ employees of DepEd SDO Benguet.
role: Research Leader & Back-End Lead
team: Team of 4 within an 8-member build
period: Aug 2026 – Present
sort: 202608
group: led
led: Requirements and delivery for the Service Records subsystem, including a 129-requirement specification, a 14-iteration Scrumban roadmap, and the data and event contract shared with the Leaves team.
built: The Service Records microservice in Node.js, Express and MongoDB Atlas, with an append-only audit log, HMAC-signed webhooks, a transactional outbox, and CI/CD through GitHub Actions, Docker and Kubernetes.
outcome: In development for more than 5,000 employees across the division.
stack: [Node.js, Express, MongoDB Atlas, GitHub Actions, Docker, Kubernetes, Vitest, Supertest]
---

## The problem

The Schools Division Office of Benguet (DepEd SDO Benguet) keeps service records for more than 5,000 employees on paper and in scattered spreadsheets. Salary history, step increments and loyalty-pay milestones are tracked by hand, which makes missed promotions easy to overlook.

## What I did

I lead a four-member team responsible for the Service Records subsystem, one of two teams in an eight-member build. I co-authored the development plan and the requirements specification: 129 traceable requirements, a 14-iteration Scrumban roadmap tracked in GitHub Projects, and 24 policy questions prepared for client sign-off. I also co-own the data and event contract between our service and the Leaves team's.

On the technical side, I design and build the Service Records microservice. Each employee's record is append-only and audit-logged, so every change to salary history, step increments and loyalty-pay milestones can be traced. Automated 60-day reminders flag promotions that would otherwise be missed. The service communicates with the Leaves service through HMAC-signed webhooks backed by a transactional outbox. CI/CD runs automated Vitest and Supertest suites through GitHub Actions, Docker and Kubernetes across staging and production.

## Status

The portal is in development. Once complete, it will give the division a single system of record in place of paper files and spreadsheets.
