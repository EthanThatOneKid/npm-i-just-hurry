import { justHurry } from "./just_hurry.ts";
import { assertEquals } from "../../deps/std/testing.ts";

// TODO: test justHurry()
Deno.test("justHurry", () => {
  assertEquals("npm i -D example", justHurry(`{ "example": "1.0.0" }`, true));
});
