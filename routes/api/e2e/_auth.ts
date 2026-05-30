const E2E_SECRET = Deno.env.get("E2E_SECRET");

export function isAuthorized(req: Request): boolean {
  if (!E2E_SECRET) return false;
  // TODO: update if a custom domain is set up for production.
  if (new URL(req.url).hostname === "oshi.smit153.deno.net") return false;
  return req.headers.get("x-e2e-secret") === E2E_SECRET;
}
