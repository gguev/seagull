# Seagull

Seagull is a Chrome extension that adds video game reviews and gameplay videos from YouTube to the Steam store. May be renamed to Shroom.gg in the future. Link to Chrome Web Store page is [here](https://chrome.google.com/webstore/detail/seagull-add-reviews-and-g/egembinjicipjagnleelfdfpejhlchll)

## Features

-   [React](https://svelte.dev/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Vite](https://vitejs.dev/)
-   [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
-   [Chrome Extensions Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/)

## Development

```bash
# install dependencies
npm i

# build the content script to `/dist` directory
# vite.build.watch rebuilds when modules have changed on disk
npm run dev:content 

# in another terminal, build the rest of the app (background page, options page, popup page, etc)
# this also rebuilds when changes are made 
npm run dev:pages 
```

*NOTE: `vite.config.content.ts` and `vite.config.ts` run concurrently

## Build

```bash
# build files to `/dist` directory
$ npm run build
```

## Load unpacked extensions

[Getting Started Tutorial](https://developer.chrome.com/docs/extensions/mv3/getstarted/)

1. Open the Extension Management page by navigating to `chrome://extensions`.
2. Enable Developer Mode by clicking the toggle switch next to `Developer mode`.
3. Click the `LOAD UNPACKED` button and select the `/dist` directory.

![Example](https://wd.imgix.net/image/BhuKGJaIeLNPW9ehns59NfwqKxF2/vOu7iPbaapkALed96rzN.png?auto=format&w=571)
