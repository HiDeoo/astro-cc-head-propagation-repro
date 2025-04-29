# astro-cc-head-propagation-repro

## Steps to reproduce

1. Clone this repository
1. Run `pnpm install`
1. Run `pnpm dev` and visit [`http://localhost:4321/a/`](http://localhost:4321/a/)

   You should see some content including a box with a red background, black border and white text.

1. Stop the development server
1. Rename `src/pages/[...smug].astro` to `src/pages/[...skug].astro`

   The idea is that this file is now alphabetically before `src/pages/[...slug].astro`.

1. Run `pnpm dev` and visit [`http://localhost:4321/a/`](http://localhost:4321/a/)

   The styles of the red box are now missing.
