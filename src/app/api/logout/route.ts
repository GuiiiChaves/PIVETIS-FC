import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set({
    name: "auth",
    value: "",
    path: "/",
    httpOnly: true,
    maxAge: 0
  });
  res.cookies.set({
    name: "user_name",
    value: "",
    path: "/",
    maxAge: 0
  });
  return res;
}