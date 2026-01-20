# Small Business Auto Builder (V4)

A guided, opinionated platform that determines the correct website outcome for a small business and provisions a complete operational front door.

## Architecture
- **Frontend:** Next.js App Router (React)
- **Backend:** Node.js + Express (REST API)
- **Database:** PostgreSQL recommended (current implementation uses an in-memory store with TODOs for persistence)

## Core Outcomes
- Contact / Booking
- Sell Products
- Findable / Professional

No hybrid goals unless an explicit upgrade flag is enabled.

## Repository Layout
- `frontend/` — Next.js UI with onboarding, preview/editor, dashboard, orders, and help pages.
- `backend/` — Express REST API with onboarding decision logic, template system, and feature gating scaffolding.

## Local Development

### Backend
```bash
cd backend
npm install
npm run dev
```

The backend listens on `http://localhost:4000`.

### Frontend
```bash
cd frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:3000`.

## Environment Variables
Create a `.env` file (examples below) when wiring up a real database or auth provider.

```
PORT=4000
DATABASE_URL=postgresql://user:password@localhost:5432/sbab
```

## Minimum Data Models (Spec)
- **User**: id, email, role, created_at
- **Business**: id, name, industry, primary_goal, status, created_at
- **Website**: id, business_id, pathway_type, template_version, domain, published_at
- **ContentBlock**: id, website_id, block_type, content_json, locked
- **Booking**: id, business_id, customer_info, datetime, status
- **Order**: id, business_id, items, total, status, pickup_time
- **Product**: id, business_id, type, name, price, image
- **CRMRecord**: id, business_id, priority, trigger_reason, last_activity

## Seed Data
Sample seed data is available in `backend/seed/seed-data.json`.

## Feature Gating Notes
- The onboarding decision assigns **exactly one** primary goal.
- Ordering **or** booking is enabled based on the goal.
- Expansion triggers are stubbed and require explicit intent + upgrade flag (TODO).

## TODO (Planned V4 Work)
- Persist data to PostgreSQL (Prisma or equivalent).
- Add authentication (email/password + magic link).
- Implement upgrade flags and billing hooks.
- Add audit trail for consultant edits.
