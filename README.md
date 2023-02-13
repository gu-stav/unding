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
