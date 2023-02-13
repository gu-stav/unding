# Unding

A SvelteKit CMS exploration.

## Monorepo structure

- `apps/`:
    - `dev`: Example applications
- `packages/`:
    - `capi`: Content API
    - `cli`: `unding` CLI command
    - `config`: Shared utilities between `capi` and `studio` for config and schema management
    - `studio`: Wrapped SvelteKit application
    - `ui`: Component library

## Development setup

1. Install dependencies using `pnpm i`
2. Navigate into the dev-example `cd apps/dev`
3. Runing `pnpm dev` will run a SvelteKit instance on port 5173: http://127.0.0.1:5173/
