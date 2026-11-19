# Vice City Vault

A GTA VI showcase and console marketplace demo built with Vite, React, TypeScript and Tailwind CSS.

## Features

- **Cinematic landing page** — official GTA VI artwork, animated ticker, stats, trailers and featured products.
- **Trailers from the web** — privacy-enhanced YouTube embeds from Rockstar Games, loaded on click.
- **Marketplace** — 21 products (consoles, bundles, games, accessories and merch), category filters, search and sorting.
- **Cart** — persistent cart (localStorage), slide-out cart drawer, quantity controls and toasts.
- **Checkout in USD** — shipping details, subtotal / shipping / 8% estimated tax / total, and three payment methods: **PayPal**, **Crypto (BTC / ETH / USDT)** and **Cash App**.
- **Installation assistance** — step-by-step guides for PS5, Xbox Series X|S and PC, troubleshooting tips and an install FAQ.
- **Support** — contact ticket form, support channels, FAQ accordion and confirmation ticket number.
- **Responsive design** — mobile menu, adaptive grids and sticky panels.

> **Important:** checkout is a **front-end demo**. It does not process payments, collect wallet or PayPal credentials, or fulfill orders. Wallet addresses and Cashtags are clearly marked as demo values. Before using this for real sales, connect a verified payment provider (PayPal SDK, a crypto payment gateway, and Cash App Pay), add a backend/order database, and replace the demo contact form with a real support integration.

## Getting started

```bash
cd gta6-vice-city
npm install
npm run dev
```

Open <http://localhost:5173>.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build on port 4173 |
| `npm run typecheck` | Run TypeScript checks only |

## Project structure

```
src/
  components/     Header, footer, cart drawer, product cards/modal, toasts, helpers
  context/        Cart state, persistence and notifications
  data/           Products, trailers, install guides and FAQs
  lib/            USD formatting, tax/shipping calculations, helpers
  pages/          Home, Marketplace, Install, Support, Checkout, 404
public/media/     Optimized web-sourced images
```

See [MEDIA_SOURCES.md](./MEDIA_SOURCES.md) for image and video attribution.

## Editing products and prices

All products live in `src/data/site.ts` in the `products` array. Prices are plain numbers in USD and are formatted with `formatUSD()` from `src/lib/format.ts`. Shipping is free above $500; tax is estimated at 8%. Adjust the constants in `src/lib/format.ts` to change those rules.
