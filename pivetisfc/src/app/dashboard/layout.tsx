import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={styles.shell}>
      <aside style={styles.sidebar}>
        <div style={styles.brand}>Pivetis FC</div>
        <nav style={styles.nav}>
          <a style={styles.navItem} href="/dashboard">Visão Geral</a>
          <a style={styles.navItem} href="/dashboard?tab=elenco">Elenco</a>
          <a style={styles.navItem} href="/dashboard?tab=taticas">Táticas</a>
          <a style={styles.navItem} href="/dashboard?tab=estatisticas">Estatísticas</a>
          <a style={styles.navItem} href="/dashboard?tab=config">Configurações</a>
        </nav>
      </aside>
      <main style={styles.main}>{children}</main>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  shell: {
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    minHeight: "100dvh",
    background: "linear-gradient(180deg, #020403, #070c08)",
    color: "#eafff4"
  },
  sidebar: {
    borderRight: "1px solid rgba(40,234,143,0.25)",
    padding: "20px 16px",
    background: "linear-gradient(180deg, rgba(4,197,110,0.08), rgba(2,32,21,0.35))",
    position: "sticky",
    top: 0,
    alignSelf: "start",
    height: "100dvh"
  },
  brand: {
    fontWeight: 900,
    fontSize: 20,
    color: "#2ef2a3",
    marginBottom: 18
  },
  nav: { display: "grid", gap: 8 },
  navItem: {
    color: "#c8ffe6",
    textDecoration: "none",
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid transparent",
    background: "transparent"
  },
  main: { padding: 22 }
};