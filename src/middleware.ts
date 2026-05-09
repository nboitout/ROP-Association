import createMiddleware from "next-intl/middleware";
import { routing } from "./lib/routing";

export default createMiddleware(routing);

export const config = {
  // Explicit root + locale-prefixed + catch-all — the canonical next-intl pattern.
  matcher: [
    "/",
    "/(fr|en)/:path*",
    "/((?!api|_next|_vercel|assets|.*\\..*).*)",
  ],
};
