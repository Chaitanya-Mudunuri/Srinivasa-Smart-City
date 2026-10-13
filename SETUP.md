# Sri Srinivasa Smart City - Setup & Deployment Guide

Welcome to the official repository for **Sri Srinivasa Smart City**, a premier AP-RERA approved plotted residential community in Jaggampeta, East Godavari District, Andhra Pradesh.

Managed by: **Mudunuri Seetharamaraju & Mudunuri MuraliKrishnamRaju**

---

## Tech Stack
- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **3D & Animation:** React Three Fiber, Drei, GSAP, Framer Motion
- **Maps:** Leaflet & OpenStreetMap
- **Forms:** Web3Forms (client-side lead capture)
- **Export Mode:** Fully Static (`output: 'export'`) for zero-server hosting (GitHub Pages, Cloudflare Pages, Netlify).

---

## Local Development

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Static Export:**
   ```bash
   npm run build
   ```
   The static HTML/CSS/JS export will be generated in the `/out` directory.

---

## Deployment Guides

### 1. GitHub Pages
- Configured via `.github/workflows/deploy.yml`.
- Ensure GitHub repository settings have **Pages** source set to **GitHub Actions**.

### 2. Netlify
- Pre-configured with `netlify.toml`.
- Connect repository to Netlify and deploy with build command `npm run build` and publish directory `out`.

### 3. Cloudflare Pages
- Framework preset: **Next.js (Static HTML Export)**
- Build command: `npm run build`
- Build output directory: `out`
