# Global Mercury Recovery ~ Website

Marketing and platform site for **Global Mercury Recovery & Water Security (GMRWS)**, built on Next.js 14 with Tailwind CSS and Framer Motion.

Legal entity: **GeoNano R&D LLC**

---

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** with custom design tokens
- **Framer Motion** for scroll animations
- **TypeScript**
- No backend ~ contact forms use `mailto:` handlers

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/technology` | Five Pillar Architecture |
| `/impact` | Environmental / Social / Economic Impact |
| `/about` | Team & Company Overview |
| `/funding` | Grants & Investor Inquiry |
| `/contact` | Contact Form |

---

## Deploy to Vercel

### Option 1 ~ Vercel CLI (recommended)

```bash
npm i -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js and configures the build correctly.

### Option 2 ~ Vercel Dashboard

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**.
3. Import the GitHub repository.
4. Leave all build settings at defaults (Vercel detects Next.js automatically).
5. Click **Deploy**.

### Build Settings (if prompted)

| Setting | Value |
|---------|-------|
| Framework | Next.js |
| Build Command | `npm run build` |
| Output Directory | `.next` |
| Install Command | `npm install` |

---

## Environment Variables

No environment variables are required for the base site. If you add backend contact handling later, add:

```
CONTACT_EMAIL=your@email.com
```

---

## Customization Checklist

Before going live:

- [ ] Replace all `// TODO: replace with real data` stat values
- [ ] Replace `[Team Member]` placeholders with real names and bios
- [ ] Replace `[Advisory Member]` placeholders
- [ ] Update `mailto:info@globalmercuryrecovery.com` with real contact email
- [ ] Add real logo/favicon to `/public/`
- [ ] Add Open Graph images to `/public/` and update `metadata` in `app/layout.tsx`
- [ ] Replace the interactive map placeholder in `/impact` with a real map component
- [ ] Update partner logos if available

---

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `gold` | `#C9A84C` | Primary accent, CTAs |
| `teal` | `#00D4AA` | Secondary accent, data |
| `navy` | `#0A0F1E` | Primary background |
| `navy-mid` | `#0D1526` | Section alternates |
| `navy-card` | `#131C30` | Card backgrounds |

---

*Built for Global Mercury Recovery & Water Security. GeoNano R&D LLC.*
