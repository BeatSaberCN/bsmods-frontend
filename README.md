# BadBSMods Frontend For Chinese Community

This is only used for a localized beatmods source.

- Localization for chinese texts.
- Navigator is removed. No edit avaliable maybe...
- The backend is a request forwarder via cloudflare worker. It's always realtime and synchornized with `beatmods.com`.
- A `/front` url prefix is hardcoded.

## Deploy notes

Only the following pages should be avaliable:
- `/mods`
- `/mods/[0-9]+`
- `/_app`

Do NOT allow users access other pages when deploy.

All newly added code is under the MIT license, just like the upstream project.

# BadBSMods-Frontend

Frontend for [BadBSMods](https://github.com/Saeraphinx/badbsmods) that is

- Developed with [svelte](https://svelte.dev)
- Designed with [Fluent Design](https://fluent2.microsoft.design/)
  - With Fluent components provided by [svelte-fui](https://github.com/ryu-man/svelte-fui)

## Dev

1. Create a .env file based on example.env pointing to your api instance.
2. Run `yarn`
3. Run `yarn dev`

## Production setup

1. Run `docker pull ghcr.io/futuremappermydud/bsmods-frontend:latest` in your terminal
2. Run a container from the image
3. Pull whenever updating
