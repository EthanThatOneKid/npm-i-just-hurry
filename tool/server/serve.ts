import { serve } from "../../deps/std/http.ts";
import { justHurry } from "../lib/mod.ts";
import { fetchPackage } from "./fetch_pkg.ts";
import { hydrate } from "./hydrate.ts";

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);

  switch (url.pathname) {
    case "/": {
      const url = new URL(req.url);

      const deps = url.searchParams.get("deps") ?? `{ "example": "1.0.0" }`;
      const preserveVersions =
        url.searchParams.get("__preserve_versions") !== null;
      const devDeps = url.searchParams.get("__dev_deps") !== null;

      const result = justHurry(deps, devDeps, preserveVersions);

      return new Response(hydrate(deps, result, devDeps, preserveVersions), {
        headers: { "Content-Type": "text/html" },
      });
    }
    default: {
      const pkg = await fetchPackage(url);
      if (pkg !== null) {
        let result = "";

        if (pkg.dependencies !== undefined) {
          result += justHurry(JSON.stringify(pkg.dependencies), false, true);
        }

        if (pkg !== null && pkg.devDependencies !== undefined) {
          if (result !== "") result += " && ";
          result += justHurry(JSON.stringify(pkg.devDependencies), true, true);
        }

        if (result.length > 0) {
          return new Response(hydrate("", result, true, true), {
            headers: { "Content-Type": "text/html" },
          });
        }
      }

      return new Response("How can I help you?", { status: 404 });
    }
  }
}

console.log("Listening on http://localhost:8000");
await serve(handler);
