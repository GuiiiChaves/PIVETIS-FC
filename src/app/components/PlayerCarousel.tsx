// app/components/PlayerCarousel.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

type Player = {
  id: string | number;
  name: string;
  position: string;
  overall?: number;
  number?: string | number;
  image?: string;
  matches?: number;   // PARTIDAS
  goals?: number;     // GOLS
  assists?: number;   // ASSISTÊNCIAS
};

type Props = {
  players: Player[];
  autoplayMs?: number;
};

export default function PlayerCarousel({ players, autoplayMs = 3500 }: Props) {
  const slides = useMemo(() => players ?? [], [players]);
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (hover || slides.length <= 1) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, autoplayMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [hover, slides.length, autoplayMs]);

  if (!slides.length) {
    return (
      <div style={styles.container}>
        <div style={styles.empty}>Sem jogadores para exibir no momento.</div>
      </div>
    );
  }

  const current = slides[index];

  return (
    <div
      style={styles.container}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Imagem de fundo do slide atual (banner maior) */}
      <div style={styles.imageWrap}>
        {current?.image ? (
          <Image
            src={current.image}
            alt={current.name}
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div style={styles.placeholderImg}>
            <span style={{ opacity: 0.8 }}>{current?.name ?? "Jogador"}</span>
          </div>
        )}
        {/* Gradiente para leitura do conteúdo */}
        <div style={styles.gradTop} />
        <div style={styles.gradBottom} />
      </div>

      {/* Painel de informações enriquecido */}
      <div style={styles.infoPanel}>
        <div style={styles.rowTop}>
          <div style={styles.nameBox}>
            <div style={styles.name}>{current.name}</div>
            <div style={styles.metaRow}>
              <span style={styles.badge}>{current.position}</span>
              <span style={styles.dot}>•</span>
              <span style={styles.meta}>OVR {current.overall ?? "-"}</span>
              {current.number ? (
                <>
                  <span style={styles.dot}>•</span>
                  <span style={styles.meta}>#{current.number}</span>
                </>
              ) : null}
            </div>
          </div>
        </div>

        <div style={styles.statsRow}>
          <div style={styles.statCard}>
            <div style={styles.statLabel}>PARTIDAS</div>
            <div style={styles.statValue}>{current.matches ?? 0}</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statLabel}>GOLS</div>
            <div style={styles.statValue}>{current.goals ?? 0}</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statLabel}>ASSISTÊNCIAS</div>
            <div style={styles.statValue}>{current.assists ?? 0}</div>
          </div>
        </div>
      </div>

      {/* Controles */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => setIndex(i => (i - 1 + slides.length) % slides.length)}
            style={{ ...styles.navBtn, left: 10 }}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Próximo"
            onClick={() => setIndex(i => (i + 1) % slides.length)}
            style={{ ...styles.navBtn, right: 10 }}
          >
            ›
          </button>

          {/* Dots */}
          <div style={styles.dotsWrap}>
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para o slide ${i + 1}`}
                onClick={() => setIndex(i)}
                style={{
                  ...styles.dotBtn,
                  width: i === index ? 24 : 8,
                  background: i === index ? "rgba(40,234,143,0.95)" : "rgba(255,255,255,0.4)"
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    position: "relative",
    width: "100%",
    // Banner MAIOR: altura responsiva
    height: "clamp(240px, 45vw, 460px)",
    borderRadius: 20,
    overflow: "hidden",
    border: "1px solid rgba(40,234,143,0.25)",
    boxShadow: "0 8px 36px rgba(40,234,143,0.15)"
  },
  imageWrap: {
    position: "absolute",
    inset: 0
  },
  placeholderImg: {
    position: "absolute",
    inset: 0,
    display: "grid",
    placeItems: "center",
    background:
      "linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0.45)), radial-gradient(60% 60% at 50% 50%, rgba(40,234,143,0.18), rgba(4,197,110,0.08))"
  },
  gradTop: {
    position: "absolute",
    insetInline: 0,
    top: 0,
    height: "35%",
    background: "linear-gradient(180deg, rgba(6,9,7,0.9), transparent)"
  },
  gradBottom: {
    position: "absolute",
    insetInline: 0,
    bottom: 0,
    height: "55%",
    background: "linear-gradient(0deg, rgba(6,9,7,0.9), rgba(6,9,7,0.0))"
  },
  infoPanel: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 14,
    display: "grid",
    gap: 10,
    padding: 12,
    borderRadius: 14,
    border: "1px solid rgba(40,234,143,0.28)",
    background: "linear-gradient(180deg, rgba(6,9,7,0.65), rgba(6,9,7,0.45))",
    backdropFilter: "blur(6px)",
    boxShadow: "0 0 24px rgba(40,234,143,0.15)"
  },
  rowTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12
  },
  nameBox: { display: "grid", gap: 4 },
  name: {
    fontSize: 22,
    fontWeight: 800,
    color: "#e6fff4",
    textShadow: "0 0 12px rgba(40,234,143,0.3)"
  },
  metaRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    color: "#afffe0",
    fontSize: 13
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "4px 8px",
    fontWeight: 800,
    color: "#07100c",
    background: "linear-gradient(90deg, #28ea8f, #04c56e)",
    borderRadius: 8,
    border: "1px solid rgba(40,234,143,0.6)"
  },
  dot: { opacity: 0.6 },
  meta: { color: "#bfffe6", fontWeight: 700 },
  statsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 8
  },
  statCard: {
    display: "grid",
    justifyItems: "center",
    padding: "8px 8px",
    borderRadius: 10,
    border: "1px solid rgba(40,234,143,0.25)",
    background: "linear-gradient(180deg, rgba(10,15,12,0.9), rgba(13,21,18,0.7))"
  },
  statLabel: {
    fontSize: 11,
    letterSpacing: 0.8,
    color: "#a5f7d3",
    textTransform: "uppercase"
  },
  statValue: {
    marginTop: 2,
    fontSize: 20,
    fontWeight: 900,
    color: "#eafff4",
    textShadow: "0 0 10px rgba(40,234,143,0.25)"
  },
  navBtn: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    height: 40,
    width: 40,
    borderRadius: 999,
    border: "1px solid rgba(40,234,143,0.4)",
    background: "rgba(6,9,7,0.6)",
    color: "#bfffe6",
    fontSize: 24,
    fontWeight: 800,
    lineHeight: "40px",
    textAlign: "center" as const,
    cursor: "pointer",
    boxShadow: "0 0 14px rgba(40,234,143,0.2)"
  },
  dotsWrap: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    gap: 6
  },
  dotBtn: {
    height: 8,
    borderRadius: 999,
    border: "none",
    cursor: "pointer"
  },
  empty: {
    display: "grid",
    placeItems: "center",
    height: "100%",
    color: "#a5f7d3"
  }
};