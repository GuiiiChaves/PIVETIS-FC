import React from "react";

const roster: { name: string; position?: string }[] = [
  { name: "Oracio LE PRINCE", position: "CAM" },
];

export default function ElencoPage() {
  return (
    <main style={styles.page}>
      <section style={styles.wrap}>
        <h1 style={styles.title}>Elenco Pivetis FC</h1>
        <div style={styles.grid}>
          {roster.map((p, idx) => (
            <div key={idx} style={styles.card}>
              <div style={styles.glow} />
              <div style={styles.number}>{idx + 1}</div>
              <div style={{ flex: 1 }}>
                <div style={styles.name}>{p.name}</div>
                {p.position ? <div style={styles.pos}>{p.position}</div> : null}
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
    minHeight: "100dvh",
    background:
      "radial-gradient(1200px 600px at 60% -20%, rgba(60,255,153,0.08), rgba(0,0,0,0)) #060806",
    color: "#d9ffef",
    padding: "18px 20px 40px",
  },
  wrap: { maxWidth: 1200, margin: "0 auto" },
  title: { fontSize: 28, margin: "4px 0 14px", color: "#e7fff4" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0,1fr))",
    gap: 14,
  },
  card: {
    position: "relative",
    display: "flex",
    gap: 12,
    alignItems: "center",
    background:
      "linear-gradient(180deg, rgba(5,43,24,0.65), rgba(3,24,14,0.85))",
    border: "1px solid rgba(77,255,166,0.18)",
    borderRadius: 14,
    padding: 14,
    overflow: "hidden",
  },
  glow: {
    position: "absolute",
    inset: -1,
    background:
      "radial-gradient(400px 120px at 80% 0%, rgba(40,234,143,0.12), transparent 60%)",
  },
  number: {
    width: 46,
    height: 46,
    borderRadius: 12,
    border: "1px solid rgba(77,255,166,0.25)",
    display: "grid",
    placeItems: "center",
    color: "#a4ffd9",
    fontWeight: 800,
  },
  name: { color: "#e7fff4", fontWeight: 700, fontSize: 16 },
  pos: { color: "#89f3c8", fontSize: 13, marginTop: 2 },
};