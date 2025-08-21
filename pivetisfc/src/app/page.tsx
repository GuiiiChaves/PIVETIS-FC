import type { Metadata } from "next";
import Link from "next/link";
import PlayerCarousel from "./components/PlayerCarousel";
import players from "./data/players.json";

export const metadata: Metadata = {
  title: "Pivetis FC | Bem-vindo",
  description: "Time de Pro Clubs — verde e preto, intensidade total."
};

export default function HomePage() {
  const eleven = players.slice(0, 11);

  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.header}>
          <h1 style={styles.title}>Bem-vindo ao Pivetis FC</h1>
          <p style={styles.subtitle}>
            Time de Pro Clubs no estilo EAFC — verde e preto, intensidade total.
          </p>
        </div>

        <div style={styles.carouselWrap}>
          <PlayerCarousel players={eleven as any} />
        </div>

        {/* Bloco de CTAs logo abaixo do carousel */}
        <div style={styles.ctaRow}>
          <Link href="/login" style={styles.ctaPrimary}>Fazer login</Link>
          <Link href="/elenco" style={styles.ctaSecondary}>Ver elenco</Link>
        </div>

        {/* 11 cards com nomes dos integrantes */}
        <div style={styles.cardsGrid}>
          {eleven.map((p) => (
            <div key={p.id} style={styles.card}>
              <div style={styles.cardAvatar}>
                <div style={styles.initials}>{p.number}</div>
              </div>
              <div style={styles.cardInfo}>
                <div style={styles.cardName}>{p.name}</div>
                <div style={styles.cardMeta}>{p.position} • OVR {p.overall}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100svh",
    background: "radial-gradient(1300px 900px at 0% 0%, rgba(40,234,143,0.08), transparent), #060907",
    color: "#eafff4"
  },
  hero: {
    width: "100%",
    maxWidth: 1280,
    margin: "0 auto",
    padding: "24px 16px 56px"
  },
  header: { marginBottom: 18 },
  title: {
    margin: 0,
    fontSize: 34,
    lineHeight: 1.1,
    color: "#bfffe6",
    textShadow: "0 0 10px rgba(40,234,143,0.35)"
  },
  subtitle: { marginTop: 8, color: "#a5f7d3" },
  carouselWrap: { marginTop: 16 },
  ctaRow: {
    display: "flex",
    gap: 12,
    marginTop: 16,
    flexWrap: "wrap"
  },
  ctaPrimary: {
    padding: "12px 18px",
    borderRadius: 12,
    background: "linear-gradient(90deg, #28ea8f, #04c56e)",
    color: "#07100c",
    fontWeight: 800,
    border: "1px solid rgba(40,234,143,0.5)",
    boxShadow: "0 0 18px rgba(40,234,143,0.32)"
  },
  ctaSecondary: {
    padding: "12px 18px",
    borderRadius: 12,
    color: "#aaffd7",
    border: "1px solid rgba(40,234,143,0.5)",
    background: "linear-gradient(180deg, rgba(6,9,7,0.6), rgba(6,9,7,0.3))"
  },
  cardsGrid: {
    marginTop: 18,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: 12
  },
  card: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    border: "1px solid rgba(40,234,143,0.25)",
    background: "linear-gradient(180deg, #0a0f0c 0%, #0d1512 100%)"
  },
  cardAvatar: {
    width: 48,
    height: 48,
    borderRadius: 12,
    background: "radial-gradient(60% 60% at 50% 50%, rgba(40,234,143,0.35), rgba(4,197,110,0.1))",
    display: "grid",
    placeItems: "center",
    border: "1px solid rgba(40,234,143,0.4)"
  },
  initials: { color: "#bfffe6", fontWeight: 800 },
  cardInfo: { display: "grid", gap: 2 },
  cardName: { color: "#eafff4", fontWeight: 700 },
  cardMeta: { color: "#90ffd0", fontSize: 13 }
};