import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const allCookies = request.cookies.getAll();
  console.log(allCookies);

  const publicPaths = [
    ".ttf",
    ".woff",
    ".woff2",
    ".jpg",
    ".png",
    ".jpeg",
    ".css",
  ];
  const isPublicPath = publicPaths.some((extension) =>
    request.nextUrl.pathname.endsWith(extension)
  );

  if (isPublicPath) {
    return NextResponse.next();
  }

  if (!token) {
    if (
      request.nextUrl.pathname == "/" ||
      request.nextUrl.pathname == "/auth/login" ||
      request.nextUrl.pathname == "/auth/otp" ||
      request.nextUrl.pathname == "/rules" ||
      request.nextUrl.pathname == "/privacy"
    ) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // if (request.nextUrl.pathname === "/") {
  //   return NextResponse.redirect(new URL("/account", request.url));
  // }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    //  '/dash',
    // '/dash/:path*',
    "/((?!api|_next/static|_next/image|favicon.ico|c1).*)",
  ],
};
