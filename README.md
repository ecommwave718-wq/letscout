# letscout

> The all-in-one scouting and lead generation platform for store owners, email marketers, and outreach experts.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Deployment:** Vercel-ready

## Features

- 🔍 Smart scouting engine for lead discovery
- 📧 Outreach automation with email sequences
- 📊 Lead enrichment with verified data
- 👥 Team collaboration tools
- 🛡️ Deliverability protection
- 🔌 50+ integrations

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with SEO metadata
│   ├── page.tsx          # Landing page
│   ├── globals.css       # Global styles & theme
│   ├── robots.ts         # robots.txt generation
│   ├── sitemap.ts        # sitemap.xml generation
│   └── dashboard/
│       ├── layout.tsx     # Dashboard metadata
│       └── page.tsx       # Dashboard shell with auth
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features grid
│   ├── HowItWorks.tsx     # How it works steps
│   ├── Testimonials.tsx   # Social proof
│   ├── Pricing.tsx        # Pricing plans
│   ├── CTA.tsx            # Call to action
│   └── Footer.tsx         # Site footer
public/
├── logo.png              # Brand logo
├── og-image.png          # Open Graph image
├── apple-touch-icon.png  # Apple touch icon
├── icon-192.png          # PWA icon
├── icon-512.png          # PWA icon
└── manifest.json         # PWA manifest
```

## SEO

- Optimized meta tags for scouting, lead generation, and outreach automation
- Structured data (JSON-LD) for SoftwareApplication
- Dynamic robots.txt and sitemap.xml
- Open Graph and Twitter Card meta tags
- Canonical URLs

## License

Proprietary — © letscout
