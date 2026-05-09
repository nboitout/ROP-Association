# ROP-Association

Site institutionnel de l'**Institut R.O.P. — Réflexologie Occipito-Podale**.
Refonte du site Wix [reflexo-occipitopodale.com](https://www.reflexo-occipitopodale.com)
en Next.js 15, déployé sur Vercel. Site jumeau du livre :
[rop-pi.vercel.app](https://rop-pi.vercel.app).

## Stack

- **Next.js 15** (App Router, Turbopack)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first config via `@theme`)
- **next-intl** pour FR / EN (extensible DE / ES / IT)
- **JSON-in-repo** pour les praticiens et formations (PR-driven updates)
- Déploiement : **Vercel** (Pro)

## Aesthetic — "Organic Medical Archive"

Visuel cohérent avec le site jumeau `rop-pi.vercel.app` :

- Fond parchemin (`#F5EFE2`) avec léger grain
- Typographie : **Fraunces** (display, variable serif italique) + **Manrope** (body)
- Accent oxblood (`#8B3A2A`), secondaire moss (`#5C6B4A`)
- Eyebrows en small caps mono, italiques en accent rouge sur les titres
- Mise en page éditoriale, asymétrique, espace négatif généreux

## Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run typecheck
```

## Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # locale layout (header, footer, fonts)
│   │   ├── page.tsx            # home
│   │   ├── methode/page.tsx
│   │   ├── indications/page.tsx
│   │   ├── formations/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── praticiens/page.tsx # search + filter
│   │   ├── enseignants/page.tsx
│   │   ├── recherche/page.tsx
│   │   ├── livres/page.tsx
│   │   └── contact/page.tsx
│   ├── layout.tsx              # root passthrough
│   └── not-found.tsx
├── components/
│   ├── layout/                 # header, footer
│   └── home/                   # hero, method-summary, next-trainings, …
├── data/
│   ├── praticiens.json         # 70+ praticiens
│   └── formations.json         # 9 formations 2025–2026
├── lib/
│   ├── i18n.ts                 # locales config
│   ├── routing.ts              # next-intl routing
│   ├── navigation.ts           # typed Link, useRouter
│   └── cn.ts                   # class merger
├── messages/
│   ├── fr.json                 # primaire
│   └── en.json                 # scaffold
└── styles/globals.css          # design tokens (Tailwind v4 @theme)
```

## Édition de contenu

| Quoi | Où | Comment |
|------|----|---------|
| Texte des pages | `src/messages/fr.json` | Édition directe |
| Praticiens | `src/data/praticiens.json` | Ajout/suppression d'objets |
| Formations | `src/data/formations.json` | Ajout d'objets `{slug, code, type, …}` |
| Méthode (textes longs) | `src/app/[locale]/methode/page.tsx` | JSX (à migrer vers MDX en Phase 2) |

Types de formation : `"base"`, `"postgrad"`, `"initiation"`.

## Roadmap

- [x] **Phase 1** — Foundation, design system, home, méthode, indications, formations (calendrier + détail), praticiens (liste + recherche), enseignants, recherche, livres, contact, i18n FR/EN
- [ ] **Phase 2** — Pages méthode/indications en MDX, page formation enrichie (programme complet, ICS feed `/formations/calendar.ics`, registration form via Resend)
- [ ] **Phase 3** — Carte interactive des praticiens (React-Leaflet + géocodage des adresses)
- [ ] **Phase 4** — Schémas anatomiques R.O.P. en SVG interactif (cartographie sur le pied)
- [ ] **Phase 5** — Traductions complètes EN, puis DE / ES / IT pour parité avec rop-pi
- [ ] **Phase 6** — SEO structured data (Event, Person, LocalBusiness), sitemap.xml, OG images, Vercel Analytics, Lighthouse 95+
- [ ] **Phase 7** — Migration DNS Wix → Vercel, redirections 301

## Déploiement Vercel

1. Connecter le repo dans Vercel Dashboard
2. Framework preset : **Next.js** (auto-détecté)
3. Aucune variable d'environnement nécessaire pour Phase 1
4. Le custom domain `reflexo-occipitopodale.com` se branche en Phase 7

## Crédits

Méthode R.O.P. — Guy Boitout &amp; Jean-Pierre Vadala.
Refonte technique — 2026.
