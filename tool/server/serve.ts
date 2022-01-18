import { serve } from "../../deps/std/http.ts";
import { justHurry } from "../lib/mod.ts";

const HTML_TEMPLATE = Deno.readTextFileSync("./tool/server/index.html");

function handler(req: Request): Response {
  switch (req.method.toUpperCase()) {
    default: {
      const url = new URL(req.url);
      const deps = decodeURIComponent(
        url.searchParams.get("deps") ?? `{ "example": "1.0.0" }`,
      );
      const devDeps = url.searchParams.get("devDeps") === "true";
      const preserveVersions =
        url.searchParams.get("preserveVersions") === "true";

      const result = justHurry(deps);

      return new Response(
        HTML_TEMPLATE
          .replace("%%deps%%", JSON.stringify(deps, null, 2))
          .replace("%%output%%", result),
        { headers: { "Content-Type": "text/html" } },
      );
    }
  }
}

console.log("Listening on http://localhost:8000");
await serve(handler);
