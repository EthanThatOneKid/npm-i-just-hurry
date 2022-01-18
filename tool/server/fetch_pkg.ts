export async function fetchPackage(
  url: URL,
): Promise<Record<string, Record<string, string>> | null> {
  try {
    const target = "https://github.com" + url.pathname.replace("blob", "raw");
    const response = await fetch(target);
    const pkg: Record<string, Record<string, string>> = await response.json();

    if (pkg.dependencies !== undefined || pkg.devDependencies !== undefined) {
      return pkg;
    }
    // deno-lint-ignore no-empty
  } catch {}

  return null;
}
