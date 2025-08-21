import { NextResponse } from "next/server";
import users from "../../data/users.json";

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role?: string;
};

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { email, password } = body as { email?: string; password?: string };

    if (!email || !password) {
      return NextResponse.json({ error: "Credenciais inválidas." }, { status: 400 });
    }

    const user = (users as User[]).find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!user) {
      return NextResponse.json({ error: "Email ou senha incorretos." }, { status: 401 });
    }

    // Simples “token” de sessão (apenas exemplo). Em produção, use JWT com segredo.
    const tokenValue = `sess-${user.id}-${Date.now()}`;

    const res = NextResponse.json({
      ok: true,
      user: { id: user.id, name: user.name, email: user.email, role: user.role ?? "player" }
    });

    res.cookies.set({
      name: "auth",
      value: tokenValue,
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 // 1 dia
    });

    // Opcional: cookie com algumas infos não sensíveis para uso no cliente
    res.cookies.set({
      name: "user_name",
      value: encodeURIComponent(user.name),
      httpOnly: false,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24
    });

    return res;
  } catch (e) {
    console.error("Login error", e);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}