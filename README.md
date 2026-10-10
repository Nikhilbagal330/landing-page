# Demo — Live IDO

Landing page for a public token sale. It shows a live countdown, raise progress, sale timeline, and partner strip. Wallet and Sonar actions are placeholders. No real wallet session is created.

## Stack

- Next.js (App Router) and TypeScript
- Tailwind CSS
- Radix UI primitives (dialog, dropdown, slot)
- TanStack Query
- Framer Motion
- Sonner

## Scripts

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Sale data

The page does not hardcode sale numbers. `GET /api/sale` returns the banner, hero, timeline, partners, and close time. The client loads that payload with TanStack Query and shows a skeleton while it is pending.

## Layout

```
app/                routes, providers, and the sale API
components/         page sections and UI primitives
hooks/              countdown and sale query
lib/                sale payload, types, and cn()
public/partners/    partner wordmarks
```
