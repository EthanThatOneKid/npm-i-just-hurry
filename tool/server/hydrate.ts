const HTML_TEMPLATE = Deno.readTextFileSync("./tool/server/index.html");

export function hydrate(
  deps: string,
  result: string,
  devDeps?: boolean,
  preserveVersions?: boolean,
): string {
  return HTML_TEMPLATE
    .replace("%%deps%%", deps)
    .replace("%%output%%", result)
    .replace("%%dev_deps%%", devDeps ? "checked" : "")
    .replace("%%preserve_versions%%", preserveVersions ? "checked" : "");
}
