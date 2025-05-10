import { NextResponse } from 'next/server';

const publicPaths = ['/login', '/signup',"/"];

export function middleware(request) {
  
  const token = request.cookies.get('token');

  const isPublicPath = publicPaths.some((path) => request.nextUrl.pathname.startsWith(path));

  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
    matcher: [ ], // Define protected routes
    // matcher: ['/', '/dashboard/:path*', '/profile/:path*'], // Define protected routes
  };
