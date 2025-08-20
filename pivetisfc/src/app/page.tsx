// src/app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PlayerCarousel from "./components/PlayerCarousel";

export const metadata: Metadata = {
  title: "Pivetis FC | Bem-vindo",
  description: "Bem-vindo ao Pivetis FC - Time de Pro Clubs",
};

export default function HomePage() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>
            Bem-vindo ao <span style={styles.highlight}>Pivetis FC</span>
          </h1>
          <p style={styles.subtitle}>
            Time de Pro Clubs no estilo EAFC — verde e preto, intensidade total.
          </p>

          <div style={styles.ctaRow}>
            <Link href="/login" style={styles.loginBtn}>
              Entrar no time
            </Link>
            <Link href="/elenco" style={styles.secondaryBtn}>
              Ver elenco
            </Link>
          </div>
        </div>
      </section>

      <section style={styles.carouselSection}>
        <PlayerCarousel />
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100dvh",
    background:
      "radial-gradient(1200px 600px at 10% -10%, rgba(0,255,140,0.08), transparent 40%), linear-gradient(180deg, #0b0b0b 0%, #0a0f0a 100%)",
    color: "#e6ffe6",
  },
  hero: {
    padding: "56px 24px 24px",
    maxWidth: 1280,
    margin: "0 auto",
  },
  heroContent: {
    display: "grid",
    gridTemplateColumns: "1.2fr",
    gap: 16,
  },
  title: {
    fontSize: "clamp(28px, 5vw, 48px)",
    lineHeight: 1.1,
    fontWeight: 800,
    margin: 0,
    letterSpacing: "-0.02em",
    color: "#e9fcee",
    textShadow: "0 0 18px rgba(0, 255, 140, 0.15)",
  },
  highlight: {
    color: "#28ea8f",
    textShadow: "0 0 22px rgba(40, 234, 143, 0.45)",
  },
  subtitle: {
    margin: "8px 0 0",
    fontSize: "clamp(14px, 2.5vw, 18px)",
    color: "rgba(220,255,235,0.8)",
  },
  ctaRow: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    marginTop: 20,
  },
  loginBtn: {
    background:
      "linear-gradient(180deg, #28ea8f 0%, #04c56e 100%)",
    color: "#042b1a",
    fontWeight: 700,
    padding: "12px 16px",
    borderRadius: 10,
    boxShadow:
      "0 10px 24px rgba(40,234,143,0.3), inset 0 0 0 1px rgba(0,0,0,0.4)",
    textDecoration: "none",
    transition: "transform .14s ease, box-shadow .14s ease, filter .14s ease",
  } as React.CSSProperties,
  secondaryBtn: {
    background: "rgba(0,0,0,0.4)",
    color: "#baf7d7",
    fontWeight: 600,
    padding: "12px 16px",
    borderRadius: 10,
    border: "1px solid rgba(77,255,166,0.25)",
    textDecoration: "none",
    transition: "transform .14s ease, border-color .14s ease",
  } as React.CSSProperties,
  carouselSection: {
    padding: "8px 0 48px",
    maxWidth: 1280,
    margin: "0 auto",
  },
} satisfies Record<string, React.CSSProperties>;