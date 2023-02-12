// middleware.ts
import { NextRequest, NextResponse, userAgent } from "next/server";

const regex = /mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i

export function middleware(request: NextRequest) {
  const { ua } = userAgent(request);

  const isRequestFromMobile = regex.test(ua)
  
  const url = request.nextUrl.clone()
  
  if (isRequestFromMobile) {
    url.pathname = `/teste/mobile`
  } else {
    url.pathname = `/teste/desktop`
  }
  
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/teste']
};