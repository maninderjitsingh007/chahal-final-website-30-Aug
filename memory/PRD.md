# Chahal Ayurvedic Clinic — PRD

## Original Problem Statement
"I want a website for my Chahal Ayurveda Clinic, which is associated with ayurveda medicines."

Clinic: Chahal Ayurvedic Clinic, Dr. Rajgurbir Singh Chahal (BAMS), Malerkotla-148023, Punjab. Phone: 94172-58159.

## User Choices
- Multi-page site
- Both appointment form (saved to DB) + Call/WhatsApp CTAs
- Bilingual English + Punjabi (Gurmukhi)
- No admin panel
- WhatsApp click-to-chat integration; no other 3rd-party integrations

## Architecture
- Backend: FastAPI (`/app/backend/server.py`) + MongoDB (Motor). Endpoints under `/api`:
  - `GET /api/` health
  - `GET /api/clinic-info` public clinic details
  - `POST /api/appointments` — create appointment
  - `GET /api/appointments` — list (used for future admin)
  - `POST /api/contact` — contact message (requires phone or email)
- Frontend: React + Tailwind + shadcn/ui + Sonner toasts + react-router-dom.
  - Pages: Home, About, Treatments, Gallery, Contact
  - Shared: Navbar (glassmorphic, sticky), Footer (deep forest), FloatingWhatsApp
  - Language context (`/app/frontend/src/context/LanguageContext.jsx`) persisted in localStorage (`cac-lang`)
  - Design system: forest greens + cream, Cormorant Garamond + Manrope + Noto Sans Gurmukhi

## Personas
- Adult patient in Punjab (primary Punjabi speaker) seeking natural / herbal treatment
- Adult child booking on behalf of parents
- Bilingual English-speaking urban Indian scanning credibility & credentials

## Core Requirements (static)
- Bilingual EN/PA everything user-visible
- Prominent WhatsApp + Call CTAs everywhere
- Clear list of 12 conditions treated (from clinic poster)
- Appointment booking form persisted in DB
- Google Maps embed & address, hours

## What's Implemented (2025-12)
- Bilingual multi-page site with 5 routes
- Home: hero, credibility strip, treatments grid (top 8 + "view all"), doctor section, philosophy dark section, testimonials, address+contact+booking
- About page: doctor bio, credentials, approach to healing
- Treatments page: all 12 conditions
- Gallery page: masonry columns
- Contact page: info cards, WhatsApp CTA, Google Maps embed, full booking form
- Appointment form with shadcn Select + Calendar Popover, POST to `/api/appointments`
- Floating WhatsApp button with wa.me deep link + prefilled message
- Language toggle (EN / ਪੰਜਾਬੀ) in navbar + mobile
- All interactive elements have `data-testid`
- Full E2E test pass (backend 100%, frontend 100%)

## Backlog (P0 → P2)
- P1: Simple protected admin page to list `/api/appointments` (currently no auth on GET)
- P1: Email/WhatsApp Business API notification on new appointment (needs Resend / Twilio)
- P2: Blog / Ayurveda articles section for SEO
- P2: Real testimonials with photos + Google reviews embed
- P2: Add clinic photos + doctor photo (currently uses stock images)
- P2: SEO: sitemap.xml, robots.txt, Open Graph meta, JSON-LD LocalBusiness schema
- P2: Multi-language expansion (Hindi)

## Next Tasks
1. Replace stock images with real clinic + doctor photos
2. Add admin view (`/admin`) with password to review appointment requests
3. Add JSON-LD LocalBusiness structured data for local SEO
