import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const { pathname } = request.nextUrl;

  const cookies = !!request.cookies.get("token");

  const isLogin = pathname.startsWith("/login");

  if (cookies === false && !isLogin) {
    return NextResponse.redirect(new URL ("/login", request.url));
  }

  if (cookies && isLogin) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}


export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
