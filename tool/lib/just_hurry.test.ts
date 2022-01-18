import { justHurry } from "./just_hurry.ts";
import { assertEquals } from "../../deps/std/testing.ts";
Deno.test("justHurry", () => {
  const actual = justHurry(`{ "example": "1.0.0" }`, true);
  const expected = "npm i -D example";
  assertEquals(actual, expected);
});
