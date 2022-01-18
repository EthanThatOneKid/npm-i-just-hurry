# npm-i-just-hurry 🐆

Easily copy the `npm install` command for any `package.json` on GitHub.

## Usage

All you need to do is find a `package.json` on GitHub, but I'll save you from looking for one for this example!
Let's say you want to quickly install all the same dependencies to your project that the Next.js repository's [`package.json`](https://github.com/vercel/next.js/blob/canary/package.json).

Next, just visit <https://npm-hurry.deno.dev/vercel/next.js/blob/canary/package.json> to find the command needed to `npm install` all of Next.js's dependencies and devDependencies quickly and reliably. Note that in order to compose this link, simply append the `package.json` pathname to `npm-hurry.deno.dev`:

`https://npm-hurry.deno.dev` + `/vercel/next.js/blob/canary/package.json` = [`https://npm-hurry.deno.dev/vercel/next.js/blob/canary/package.json`✨](https://npm-hurry.deno.dev/vercel/next.js/blob/canary/package.json)

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
