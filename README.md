# Fernwood Design System

An accessibility-first design system for a fictional bookstore café. Designed in Figma, built with React + Tailwind CSS.

- **Live site:** https://fernwoodportfolio.netlify.app
- **Figma file:** https://www.figma.com/make/GDaWTChOodlLSgAmcoE1qH/Design-system-for-Fernwood?code-node-id=0-6&p=f&t=JzKCVCjapWpjOTLv-0&fullscreen=1&preview-route=%2F%23components

## Run locally
```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)
1. Push to a GitHub repo's `main` branch.
2. Repo → Settings → Pages → Source: **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push.

## Stack
React 18, Vite, Tailwind CSS v4 (tokens defined in `src/index.css` under `@theme`).

## Accessibility decisions
- All text pairs meet WCAG AA; most meet AAA (see the Colors section on the site)
- 44px minimum touch targets
- Focus ring: 2px blue with a 2px gap, visible on every background
- Error, success and warning never rely on color alone
- Native `dialog` for the modal; roving tabindex for tabs; `prefers-reduced-motion` respected
