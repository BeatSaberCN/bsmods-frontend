# BadBSMods Frontend For Chinese Community

This is only used for a localized beatmods source.

- Localization for chinese texts.
- Navigator is removed. No edit avaliable maybe...
- The backend is a request forwarder via cloudflare worker. It's always realtime and synchornized with `beatmods.com`.
- A `/front` url prefix is hardcoded.

## Deploy notes

```cmd
npm run build
npx wrangler deploy
```

## Local debug with backend

step 1. run local backend

```sh
git clone git@github.com:BeatSaberCN/beatmods-agent.git
cd beatmods-agent
npm install
npm run build
npx wrangler dev
```
this should start an api server at http://127.0.0.1:8787/

step 2. run local frontend

```sh
git clone git@github.com:BeatSaberCN/bsmods-frontend.git
cd bsmods-frontend
npm install
npm run dev
```

step 3. open webbrowser like `http://localhost:5174/front/mods`

it's important you should use `localhost` instead of `127.0.0.1`, or you will trouble with CROS problem.

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
