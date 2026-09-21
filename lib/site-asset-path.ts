/** Prefix public assets when the site is built under a project subpath. */
export function siteAssetPath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}
