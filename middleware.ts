import { NextRequest, NextResponse } from "next/server";
import { Product } from "./app/page";

export function middleware(req: NextRequest ) {
    const response = NextResponse.next({
        request: {
            headers: new Headers(req.headers)
        }
    })
    // response.cookies.set(`dfd`, '12112')


    return response
}
export const config = {
    matcher: '/'
} 