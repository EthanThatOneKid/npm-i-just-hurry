export async function hydrate(
  deps: string,
  result: string,
  devDeps?: boolean,
  preserveVersions?: boolean,
): Promise<string> {
  const template = await Deno.readTextFile("./tool/server/index.html");

  return template
    .replace("%%deps%%", deps)
    .replace("%%output%%", result)
    .replace("%%dev_deps%%", devDeps ? "checked" : "")
    .replace("%%preserve_versions%%", preserveVersions ? "checked" : "");
}
