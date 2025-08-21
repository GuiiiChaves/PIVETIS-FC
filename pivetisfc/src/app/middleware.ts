import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Proteger dashboard (e rotas filhas)
  if (pathname.startsWith("/dashboard")) {
    const auth = req.cookies.get("auth")?.value;
    if (!auth) {
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("from", pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// Configurar quais rotas o middleware observa
export const config = {
  matcher: ["/dashboard/:path*"]
};