# ~/eeridev

Personal website and developer portfolio.

Dark, minimal, monospace-heavy, and loosely inspired by GitHub, terminal UIs, and clean developer landing pages.

## Stack

- Next.js
- TypeScript
- Tailwind CSS v4

## Notes

- App code lives in `src/app`
- Static assets live in `public`
- Design direction: dark UI, clean spacing, mono details, subtle motion

## Production deploy

- Build uses Next.js standalone output for Docker
- `compose.yaml` runs the app on `127.0.0.1:3000`
- Host `nginx` should proxy `eeri.dev` to that port
- Example host config lives in `deploy/nginx/eeri.dev.conf`
