---
title: 'TMP-POS: The Meeting Place Point-of-Sale System'
short: TMP-POS
tagline: A point-of-sale system for a restaurant in La Trinidad, Benguet, that is still in use.
role: Project & Technical Lead
team: Team of 5
period: Feb – Dec 2025
sort: 202502
group: led
led: A five-member team through architecture and delivery, using Rapid Application Development with monthly prototype reviews alongside the restaurant's manager.
built: The MongoDB data model and the Node.js and Express back end with EJS views, covering orders, payments, refunds, attendance and sales reports.
outcome: Cut average transaction time by 48% and remains in use at the restaurant.
stack: [Node.js, Express, EJS, MongoDB]
screenshots:
  01-staff-orders: "Staff view: the menu and today's orders, with refund requests."
  02-menu-management: "Admin view: adding and editing menu items, prices and categories."
  03-transactions: "Transaction records: cash and QR payments, PWD/senior discounts and refunds."
---

## The problem

The Meeting Place, a restaurant in La Trinidad, Benguet, handled orders, receipts and staff attendance manually. This slowed down service and made sales difficult to track.

## What I did

I led a five-member team as project and technical lead. We followed Rapid Application Development: requirements first, then a prototype refined in monthly reviews with the restaurant's manager, then module-by-module construction, and finally user acceptance testing and staff training.

I designed the architecture and the data model. The system uses an MVC structure on a two-tier setup, with a central Node.js and Express server that exposes a REST API and stores data in MongoDB. The manager and crew use it from desktop and mobile browsers over the restaurant's local network. It covers:

- Order taking and payment by cash, card or mobile wallet, with PWD and senior citizen discounts
- Refunds requested by crew and approved by the manager
- Menu and platter management with categories
- Staff time-in and time-out records
- Sales tracking in table and graph views
- Account sign-ups and password resets approved by the manager

Every price change is logged with the old price, the new price, who made the change and when. Transactions older than a year move to an archive that records who archived them, and archived data is securely deleted after another year.

## Outcome

The system cut average transaction time by 48% compared with manual processing, added real-time sales reports, and remains in use at the restaurant.
