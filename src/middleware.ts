// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

// const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);
// export default clerkMiddleware(async (auth, req: NextRequest) => {
  //   // if (isProtectedRoute(req)) await auth.protect();
  // });

export async function middleware(req: NextRequest) {
  // You can add your custom middleware logic here
  const nextResponse = NextResponse.rewrite(req.nextUrl);

  return nextResponse

}
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)'
  ]
};
