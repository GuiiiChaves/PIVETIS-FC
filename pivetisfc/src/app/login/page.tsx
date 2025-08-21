"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const search = useSearchParams();
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const from = search.get("from") || "/dashboard";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        setErr(data?.error ?? "Erro de login");
      } else {
        router.push(from); // vai sempre para /dashboard (ou para rota solicitada)
      }
    } catch {
      setErr("Falha na conexão");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={styles.page}>
      <form onSubmit={onSubmit} style={styles.card}>
        <h1 style={styles.title}>Entrar no Pivetis FC</h1>
        <div style={styles.field}>
          <label style={styles.label}>Email</label>
          <input
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seuemail@gmail.com"
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Senha</label>
          <input
            style={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••"
          />
        </div>
        {err && <div style={styles.error}>{err}</div>}
        <button style={styles.button} disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
        <p style={styles.hint}>
          Dica: admin@gmail.com / 123456
        </p>
      </form>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100svh",
    background: "radial-gradient(1200px 1200px at 100% 0%, rgba(40,234,143,0.08), transparent), #0b0f0c",
    display: "grid",
    placeItems: "center",
    padding: "24px"
  },
  card: {
    width: "100%",
    maxWidth: 420,
    background: "linear-gradient(180deg, #0e1512 0%, #0a0f0c 100%)",
    border: "1px solid rgba(40,234,143,0.25)",
    boxShadow: "0 0 30px rgba(40,234,143,0.12)",
    borderRadius: 14,
    padding: 24,
    color: "#eafff4"
  },
  title: { margin: "0 0 16px", fontSize: 24, color: "#aaffd7" },
  field: { marginBottom: 14 },
  label: { display: "block", marginBottom: 6, color: "#c9ffe9", fontSize: 14 },
  input: {
    width: "100%", padding: "12px 14px", borderRadius: 10,
    border: "1px solid rgba(40,234,143,0.35)", background: "#0c1411", color: "#eafff4",
    outline: "none", boxShadow: "inset 0 0 8px rgba(40,234,143,0.08)"
  },
  button: {
    width: "100%", marginTop: 6, padding: "12px 16px", borderRadius: 10, border: "none",
    background: "linear-gradient(90deg, #04c56e, #28ea8f)", color: "#0a0f0c", fontWeight: 700,
    cursor: "pointer", boxShadow: "0 0 14px rgba(40,234,143,0.42)"
  },
  hint: { marginTop: 10, color: "#84f7c1", fontSize: 12, opacity: 0.85 },
  error: {
    margin: "8px 0 0", padding: "8px 10px", borderRadius: 8, background: "rgba(255, 87, 87, 0.1)",
    border: "1px solid rgba(255, 87, 87, 0.4)", color: "#ff8e8e", fontSize: 13
  }
};