# Reaction Multiplayer Game

[Play the live game](https://reaction-multiplayer.ampleflame1.chatgpt.site)

A browser reaction game for 2–8 players on separate devices. Join with a six-character room code. Wait for red to turn green, then tap, click, or press Space. There is no countdown. The fastest valid reaction wins one point; the first player to win three rounds wins the match. Early taps earn no point. Exact ties and rounds with no valid taps award no points.

## Main files

- `app/page.tsx`: screens, room joining, live updates, and tap controls.
- `app/globals.css`: colors, typography, and phone layout.
- `app/api/game/route.ts`: room creation, random signal timing, scoring, and match rules.
- `db/schema.ts`: database schema.
- `drizzle/`: database migrations.

## Technology

React, TypeScript, Vinext/Vite, and Cloudflare D1. Authoritative room state lives in D1; revision checks protect simultaneous updates. Browsers poll the room and measure reaction time from when green appears locally. Connection and device speed can affect signal delivery; this is a casual game, not a calibrated reaction test.

## Local development

Requires Node.js 22.13 or newer and pnpm.

```sh
pnpm install
pnpm build
pnpm exec wrangler d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_late_blazing_skull.sql
pnpm dev
```

Open the address printed by the development server. Use a normal browser window and a private window to test two players. For additional schema changes, run `pnpm db:generate` and apply new migrations in order.

## GitHub Pages

The `docs/` folder contains a ready-to-publish version of the game. In this repository, open **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/docs**, and save. GitHub will show the live address after publishing.

The expected Pages address is `https://masi196.github.io/chat-game/`. Do not treat it as live until GitHub confirms deployment.

The game screen is served by GitHub Pages. Multiplayer rooms and scoring still run on the existing ChatGPT Sites server, since Pages only serves static files.

To rebuild the Pages files after changing the frontend:

```sh
pnpm exec vite build --config vite.pages.config.ts
```

Commit the updated `docs/` folder. Changes to the server must also be published to the existing Sites project.

## Hosting

The live game is hosted on ChatGPT Sites. This GitHub repository is a source-code copy, not an automatic deployment connection. Changes made here will not update the live site until they are brought into the Sites project and published. The `.openai/hosting.json` file identifies the existing Site and its D1 binding. No secrets or local database files are included.
