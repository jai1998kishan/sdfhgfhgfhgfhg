# ApnaGhar — Architecture Studio (React + Vite + Tailwind)

A React clone of the ApnaGhar architecture Webflow template.

## Stack

- React 18
- Vite 5
- Tailwind CSS 3
- React Router 6
- Lucide icons

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  assets/                # local static assets
  components/
    layout/              # Navbar, Footer
    sections/            # page sections (Hero, About, Services, ...)
    ui/                  # small reusable UI atoms
  data/                  # static content (services, projects, etc.)
  hooks/                 # custom hooks
  pages/                 # route-level pages
  styles/                # global CSS (Tailwind + tokens)
  App.jsx
  main.jsx
```

All fonts and global styles are declared in `index.html` and
`src/styles/globals.css`.
