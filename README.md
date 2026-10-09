# Food City Bahrain

A modern Next.js application for Food City Bahrain featuring a premium public website, multilingual architecture, and a protected admin dashboard foundation.

## Stack

- Next.js 16
- TypeScript
- App Router
- Tailwind CSS
- Prisma + PostgreSQL
- NextAuth credentials authentication
- Zod validation
- Framer Motion / GSAP / Lenis-ready structure

## Local setup

1. Copy `.env.example` to `.env` and update values.
2. Install dependencies:

```bash
npm install
```

3. Generate Prisma client:

```bash
npx prisma generate
```

4. Push the schema to a PostgreSQL database:

```bash
npx prisma db push
```

5. Seed initial content:

```bash
npm run db:seed
```

6. Start the app:

```bash
npm run dev
```

Open http://localhost:3000

## Admin access

Set these environment variables before login:

```env
ADMIN_EMAIL="admin@foodcitybahrain.com"
ADMIN_INITIAL_PASSWORD="ChangeMe123!"
```

The admin dashboard is available at `/admin`.

## Structure

- `app/` — App Router pages and routes
- `components/` — reusable UI and sections
- `lib/` — multilingual and content helpers
- `actions/` — server actions for quote and contact submissions
- `prisma/` — database schema and seed script
- `types/` — shared TypeScript types

## Notes

- Locale detection uses browser/device language and can be overridden with the `preferred_locale` cookie.
- Arabic routes use RTL, while English and Hindi render LTR.
- The app includes a modular architecture ready for CMS expansion, analytics, and additional admin modules.
