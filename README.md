# npm-i-just-hurry 🐆

I deployed this simple webapp with Deno Deploy so that I could easily copy the `npm i` command of any `package.json` on GitHub.

## Usage

All you need to do is find a `package.json` on GitHub, but I'll save you from looking for one for this example.
Let's say you want to quickly install all the same dependencies to your project that the Next.js repository's `package.json`.
To do that, you must first copy the pathname (`/vercel/next.js/blob/canary/package.json`) from the github.com URL (<https://github.com/vercel/next.js/blob/canary/package.json>).
Now, just paste the pathname (`/vercel/next.js/blob/canary/package.json`) next to `https://npm-hurry.deno.dev` and visit <https://npm-hurry.deno.dev/vercel/next.js/blob/canary/package.json> to easily copy your `npm i` command!

## Development

### Spinning up the Server Locally

```bash
deno run --allow-net --allow-read tool/server/serve.ts
```

### Testing the Library

```bash
deno test
```

---

Programmed with 💖 by [**@EthanThatOneKid**][author]

[author]: https://etok.codes/
