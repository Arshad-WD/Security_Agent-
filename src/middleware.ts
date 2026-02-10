import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || "your-secret-key-change-this-in-production"
);

export async function middleware(request: NextRequest) {
    // Protect dashboard routes
    if (request.nextUrl.pathname.startsWith("/dashboard")) {
        const sessionToken = request.cookies.get("session")?.value;

        if (!sessionToken) {
            return NextResponse.redirect(new URL("/auth/signin", request.url));
        }

        try {
            await jwtVerify(sessionToken, JWT_SECRET);
            return NextResponse.next();
        } catch (error) {
            return NextResponse.redirect(new URL("/auth/signin", request.url));
        }
    }

    // Redirect authenticated users away from auth pages
    if (request.nextUrl.pathname.startsWith("/auth")) {
        const sessionToken = request.cookies.get("session")?.value;

        if (sessionToken) {
            try {
                await jwtVerify(sessionToken, JWT_SECRET);
                return NextResponse.redirect(new URL("/dashboard", request.url));
            } catch (error) {
                // Invalid token, allow access to auth pages
                return NextResponse.next();
            }
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/auth/:path*"],
};
