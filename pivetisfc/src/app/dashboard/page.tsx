"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import players from "../data/players.json";

type Player = {
  id: number;
  name: string;
  number?: number;
  position?: string;
  photo?: string;
  nationality?: string;
};

type Spot = { id: number; x: number; y: number; label: string };

const formation433: Spot[] = [
  // Defesa
  { id: 1,  x: 50, y: 94, label: "G" },
  { id: 5,  x: 18, y: 74, label: "LB" },
  { id: 3,  x: 36, y: 70, label: "LCB" },
  { id: 4,  x: 64, y: 70, label: "RCB" },
  { id: 2,  x: 82, y: 74, label: "RB" },
  // Meio (CM mais adiantado)
  { id: 9,  x: 30, y: 54, label: "LM" }, // adiantado
  { id: 8,  x: 70, y: 54, label: "RM" },
  { id: 7,  x: 50, y: 46, label: "CM" },
  // Ataque
  { id: 10, x: 20, y: 26, label: "LW" },
  { id: 11, x: 50, y: 20, label: "ST" },
  { id: 12, x: 80, y: 26, label: "RW" }
];

export default function DashboardPage() {
  const router = useRouter();

  const data = players as Player[];
  const indexed = useMemo(() => {
    const map = new Map<number, Player>();
    for (const p of data) map.set(p.id, p as Player);
    return map;
  }, [data]);

  const handleClick = (id: number) => {
    router.push(`/dashboard/player/${id}`);
  };

  return (
    <div style={{ display: "grid", gap: 20 }}>
      <h1 style={{ margin: 0, fontSize: 24, fontWeight: 900, color: "#caffea" }}>Dashboard</h1>

      <section style={styles.fieldWrap}>
        <div style={styles.field}>
          {/* Linhas do campo */}
          <div style={styles.halfLine} />
          <div style={styles.centerCircle} />
          <div style={styles.centerDot} />
          {/* Gols e áreas podem ser adicionados depois */}

          {formation433.map((spot) => {
            const p = indexed.get(spot.id);
            const photo = p?.photo || "/players/fallback.jpg";
            return (
              <button
                key={spot.id}
                onClick={() => handleClick(spot.id)}
                style={{
                  ...styles.playerCard,
                  left: `${spot.x}%`,
                  top: `${spot.y}%`,
                  transform: "translate(-50%, -50%)"
                }}
                aria-label={`Abrir ${p?.name || "jogador"} (${spot.label})`}
              >
                <div style={styles.playerHeader}>
                  <span style={styles.badge}>{spot.label}</span>
                  {typeof p?.number === "number" && <span style={styles.number}>#{p?.number}</span>}
                </div>
                <div style={styles.body}>
                  <div style={styles.photoBox}>
                    <Image
                      src={photo}
                      alt={p?.name || "Jogador"}
                      fill
                      sizes="64px"
                      style={{ objectFit: "cover", borderRadius: 8 }}
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement & { src: string };
                        img.src = "/players/fallback.jpg";
                      }}
                    />
                  </div>
                  <div style={styles.info}>
                    <div style={styles.name}>{p?.name || "—"}</div>
                    <div style={styles.meta}>
                      <span>{p?.position || spot.label}</span>
                      {p?.nationality && <span> • {p.nationality}</span>}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  fieldWrap: {
    width: "100%",
    display: "grid",
    justifyItems: "center"
  },
  field: {
    position: "relative",
    width: "100%",
    maxWidth: 1200,
    // Campo grande e responsivo (proporção 105x68)
    aspectRatio: "105 / 68",
    minHeight: "clamp(560px, 62vw, 900px)",
    background: "radial-gradient(65% 100% at 50% 50%, #0a1c11, #07110a)",
    border: "1px solid rgba(40,234,143,0.35)",
    borderRadius: 18,
    boxShadow: "0 0 40px rgba(40,234,143,0.18) inset, 0 0 22px rgba(40,234,143,0.18)"
  },
  halfLine: {
    position: "absolute",
    left: 0,
    right: 0,
    top: "50%",
    height: 2,
    background: "rgba(40,234,143,0.35)",
    transform: "translateY(-50%)"
  },
  centerCircle: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: "22%",
    height: "22%",
    border: "2px solid rgba(40,234,143,0.35)",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)"
  },
  centerDot: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: 6,
    height: 6,
    background: "rgba(40,234,143,0.85)",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)"
  },
  playerCard: {
    position: "absolute",
    display: "grid",
    gap: 6,
    padding: 8,
    width: 230,
    background: "linear-gradient(180deg, rgba(6,9,7,0.85), rgba(6,9,7,0.45))",
    border: "1px solid rgba(40,234,143,0.45)",
    boxShadow: "0 0 16px rgba(40,234,143,0.22)",
    borderRadius: 12,
    cursor: "pointer",
    textAlign: "left",
    color: "#eafff4"
  },
  playerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  badge: {
    fontSize: 12,
    color: "#90ffd0",
    background: "rgba(40,234,143,0.12)",
    border: "1px solid rgba(40,234,143,0.35)",
    padding: "2px 6px",
    borderRadius: 6
  },
  number: {
    fontSize: 12,
    color: "#baffdf"
  },
  body: { display: "grid", gridTemplateColumns: "64px 1fr", gap: 10, alignItems: "center" },
  photoBox: { position: "relative", width: 64, height: 64, borderRadius: 8, overflow: "hidden", border: "1px solid rgba(40,234,143,0.4)" },
  info: { display: "grid", gap: 2 },
  name: { fontWeight: 800, color: "#eafff4" },
  meta: { fontSize: 12, color: "#90ffd0" }
};