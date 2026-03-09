# realtor-astro

Minimal starter for a realtor site built with Astro.

Quick start

1. Install dependencies:

```bash
cd realtor-astro
npm install
```

2. Local dev:

```bash
npm run dev
```

MLS proxy

The project includes a simple proxy endpoint at `/api/mls-proxy` that will return sample listings when no MLS credentials are configured. To connect a live MLS/RESO API, set these environment variables before running:

- `MLS_API_URL` (base URL)
- `MLS_API_KEY` (api key/token)

Example: `MLS` integration requires secure server-side credentials — use a server or deploy with environment variables.
