import { serve } from "../../deps/std/http.ts";

const html = Deno.readTextFileSync("./index.html");
console.log({ html });

function handler(req: Request): Response {
  switch (req.method.toUpperCase()) {
    case "POST": {
      // TODO: Get textarea input from body and process the npm command.
      return new Response(html);
    }
    default: {
      return new Response(html);
    }
  }
}

console.log("Listening on http://localhost:8000");
await serve(handler);
