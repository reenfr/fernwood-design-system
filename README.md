# Fernwood Design System

An accessibility-first design system for a fictional bookstore café. Designed in Figma, built with React + Tailwind CSS.

- **Live site:** _add GitHub Pages link_
- **Figma file:** _add link_

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
