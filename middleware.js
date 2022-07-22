import { NextResponse } from 'next/server'
import { getToken } from "next-auth/jwt"

// This function can be marked `async` if using `await` inside
export async function middleware(req) {
  const url = req.nextUrl.clone()
  url.pathname = '/signin'

  if (pathIsProtected(req.nextUrl.pathname)) {
    const session = await getToken({ req, secret: process.env.JWT_SECRET })

    if (!session) return NextResponse.redirect(url)
  }
}

function pathIsProtected(pathName){
  const list = [
    "/my-words",
    "/dashboard",
  ]
  return list.indexOf(pathName) >= 0
}
