# Alefoods — Peruvian superfoods ready for global retail and foodservice

[![Netlify Status]([![Netlify Status](https://api.netlify.com/api/v1/badges/9d475d8c-b907-4345-92ca-a9f77b51bc1b/deploy-status)](https://app.netlify.com/projects/alefoods-2026/deploys))](https://alefoods-2026.netlify.app/)
[![CI](https://img.shields.io/badge/CI-pending-lightgrey?logo=githubactions&logoColor=white)](#)
[![Node](https://img.shields.io/badge/Node-20.x-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-proprietary-orange)](#)

Digital showroom and lead-gen site for Alefoods: exporting ready-to-eat quinoa, specialty coffee from Oxapampa, and natural Peruvian superfoods. Built with Astro + React, fed by Content Island, and deployed to Netlify with a Resend-powered contact funnel.

## Live demo & media
- Live demo: **[text](https://alefoods-2026.netlify.app/)** (prod) and optionally a preview URL.
- Screenshots/GIFs: place 2–3 visuals here (Home, Products, Recipe detail). Example placeholders:
  - `![Home] ![alt text](public\repo-assets\image-2.png)`
  - `![Product Detail] ![alt text](public\repo-assets\image-3.png)`
  - `![Recipes] ![alt text](public\repo-assets\image-4.png) ![alt text](public\repo-assets\image-5.png)`

## Highlights
- **Product catalog** from Content Island with dynamic product detail pages.
- **Recipe library** with imagery and step-by-step instructions.
- **Lead capture** via Astro Actions + Resend (with honeypot spam protection).
- **SEO & performance**: Astro 5 static output, Netlify adapter, responsive Tailwind UI.

## Tech Stack
- Astro 5.15.4 + React 19.2.0
- Tailwind CSS 4.1.17 via Vite plugin
- Content Island (headless CMS for products/recipes)
- Resend (transactional email)
- Netlify adapter
- TypeScript, Vite, PNPM workspaces

## Requirements
- Node.js **20.x** (recommended)
- PNPM **9.x** (recommended)
- Astro **5.15.4**, React **19.2.0**, Tailwind **4.1.17**
- Optional: add `"engines": { "node": "20.x" }` to `package.json` or use `.nvmrc`/`.node-version` for team consistency.

## Quick start
1) Install dependencies
```sh path=null start=null
pnpm install
```

2) Copy env file
```sh path=null start=null
# Windows
copy .env.example .env
# macOS/Linux
cp .env.example .env
```

3) Run locally (LAN enabled at http://localhost:4321)
```sh path=null start=null
pnpm dev
```

4) Production build
```sh path=null start=null
pnpm build
```

5) Preview production locally
```sh path=null start=null
pnpm preview
```

## Environment variables
Set these in `.env` (and in Netlify for production).

| Variable | Required | Description |
| --- | --- | --- |
| `CONTENT_ISLAND_SECRET_TOKEN` | Yes | API token for Content Island (fetch products/recipes). |
| `RESEND_API_KEY` | Yes | Resend API key for sending emails. |
| `FROM_EMAIL` | Yes | Verified sender address in Resend. |
| `TO_EMAIL` | Yes | Destination mailbox for contact submissions. |

Example `.env` (dummy values):
```dotenv path=null start=null
CONTENT_ISLAND_SECRET_TOKEN=ci_test_token
RESEND_API_KEY=re_test_key
FROM_EMAIL=no-reply@yourdomain.com
TO_EMAIL=leads@yourdomain.com
```

Notes:
- If `CONTENT_ISLAND_SECRET_TOKEN` is missing/invalid, `getAllProducts`/`getAllRecipes` will fail at build time; no mock data is bundled.
- Keep `.env` out of version control; configure secrets in Netlify UI or your CI secrets manager.

## Scripts
| Command | Description |
| --- | --- |
| `pnpm dev` | Start local dev server. |
| `pnpm build` | Generate production build to `dist/`. |
| `pnpm preview` | Serve the production build locally. |
| `pnpm astro -- <cmd>` | Run Astro CLI commands (e.g., `astro check`). |

Planned additions: `pnpm lint`, `pnpm format`, `pnpm test` (add tooling before wiring these), and `pnpm start` aliasing `pnpm preview` for prod-like runs.

## Project structure
```
/
├── public/                  # Static assets
├── src/
│   ├── actions/             # Astro Actions (contact form email)
│   ├── assets/              # Images & backgrounds
│   ├── components/          # UI sections (Hero, Navbar, Recipes, etc.)
│   ├── content/             # Astro content collection config
│   ├── layouts/             # Base layout with navbar/footer
│   ├── lib/                 # Content Island client
│   ├── pages/               # Astro pages (home, products, recipes, about, contact)
│   ├── pods/                # Data + presentation pods for products & recipes
│   └── styles/              # Global Tailwind config
├── astro.config.mjs         # Astro + Netlify + Tailwind config
├── package.json             # Scripts and dependencies
└── pnpm-workspace.yaml
```

## Content & data flow
- Products: `pods/products-collection` fetches from Content Island (title, slug, description, pricing, media, nutrition). Detail pages at `/products/[slug]`.
- Recipes: `pods/recipe-collection` fetches from Content Island (title, imagery, ingredients, servings, difficulty, instructions). Detail pages at `/recipes/[slug]`.
- Contact form: `src/actions/index.ts` validates with Zod, uses a honeypot, and sends via Resend.

## Deployment (Netlify)
1) Set env vars: `CONTENT_ISLAND_SECRET_TOKEN`, `RESEND_API_KEY`, `FROM_EMAIL`, `TO_EMAIL`.
2) Build command: `pnpm build`
3) Publish directory: `dist`
4) Adapter: already configured in `astro.config.mjs` (`@astrojs/netlify`).
5) Optional: add a `netlify.toml` for branches/previews; add a deploy badge once live.

## Roadmap
- Add filters for recipes and products.
- Implement gallery in `products/[slug].astro`.
- Add “Load more” pagination for recipes/products.
- Improve contact form UX with success/error messaging.
- Create a simple 404 page.
- Handle failures from `getAllRecipes` and `getAllProducts` gracefully.
- Make quantity selector functional on product detail.
- Make “Shop Now” functional.

## Quality, CI, security
- CI: add a GitHub Actions/Netlify pipeline to run build (and lint/tests once added) on PRs.
- Security: never commit `.env`; rotate keys in Resend/Content Island; use platform secrets.
- Accessibility/SEO: ensure `alt` text, meta tags, and performance budgets; Astro static output helps with Core Web Vitals.
- Internationalization: current copy is English; plan for i18n (en/es) if targeting multiple markets.

## License
Set a clear license (e.g., MIT/Apache-2.0 or proprietary). Update the badge above accordingly.
