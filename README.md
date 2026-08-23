# RJN Portfolio

A photography and videography portfolio for Randolf Nombrado (RJN Visuals) — built with Next.js, showcasing branded video work, wedding films, and social campaigns.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- React 19 + TypeScript
- SCSS Modules for styling
- [EmailJS](https://www.emailjs.com/) for the contact form (client-side, no backend)
- Instagram's official embed widget for social campaign reels

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

### Environment variables

Copy these into a `.env.local` file at the project root (never commit this file):

```bash
# EmailJS — dashboard.emailjs.com
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=

# Destination address for contact form submissions.
# Your EmailJS template's "To Email" field must be set to {{to_email}} for this to take effect.
NEXT_PUBLIC_EMAILJS_TO_EMAIL=

# Production site URL — used for metadataBase, robots.txt, and sitemap.xml.
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

When deploying, set all five in your hosting provider's environment variable settings — `.env.local` never leaves your machine.

## Scripts

- `npm run dev` — start the dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Project structure

```
app/            routes (home, work, about, contact) + robots/sitemap
components/     shared UI (nav, footer, contact form, embeds, buttons)
components/tabs/  home page sections (work, services, referrals, contact CTA)
data/projects.ts  project/case-study content
hooks/          shared client hooks (e.g. scroll-triggered reveal)
public/         images, videos, icons
```

## Deployment

Deployed on [Vercel](https://vercel.com). Set the environment variables above in the project settings before the first deploy, and update `NEXT_PUBLIC_SITE_URL` to the real production domain once it's known.
