export function justHurry(
  rawDeps: string,
  devDeps = false,
  preserveVersions = false,
): string {
  const deps = JSON.parse(rawDeps);

  const outputArgs = Object.entries(deps).map(([name, version]) => {
    return `${name}${preserveVersions ? "@" + version : ""}`;
  }).join(" ");

  if (devDeps) {
    return `npm i -D ${outputArgs}`;
  }

  return `npm i ${outputArgs}`;
}
