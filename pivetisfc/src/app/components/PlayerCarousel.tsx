"use client";

import Image from "next/image";
import React from "react";

export type Player = {
  id: number;
  name: string;
  number: number;
  position: string;
  overall: number;
  nationality: string;
  imageUrl?: string;
};

type Props = {
  players: Player[];
};

export default function PlayerCarousel({ players }: Props) {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef<number | null>(null);

  // Auto-play
  React.useEffect(() => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % players.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [index, players.length]);

  function go(i: number) {
    setIndex((i + players.length) % players.length);
  }

  return (
    <div style={styles.wrapper}>
      <div style={{ ...styles.stage, transform: `translateX(-${index * 100}%)` }}>
        {players.map((p) => (
          <div key={p.id} style={styles.slide}>
            <div style={styles.imageWrap}>
              {p.imageUrl ? (
                <Image
                  src={p.imageUrl}
                  alt={p.name}
                  fill
                  priority
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <div style={styles.noImage}>
                  <span style={{ fontSize: 72, opacity: 0.25 }}>{p.number}</span>
                </div>
              )}
              {/* Overlay de dados */}
              <div style={styles.overlay}>
                <div style={styles.badge}>
                  <span style={styles.badgeNum}>#{p.number}</span>
                  <span style={styles.badgePos}>{p.position}</span>
                </div>
                <h2 style={styles.name}>{p.name}</h2>
                <div style={styles.meta}>
                  <span style={styles.metaPill}>OVR {p.overall}</span>
                  <span style={styles.metaPill}>{p.nationality}</span>
                </div>
              </div>
              {/* Borda neon */}
              <div style={styles.glow} />
            </div>
          </div>
        ))}
      </div>

      {/* Controles */}
      <button onClick={() => go(index - 1)} style={{ ...styles.navBtn, left: 12 }} aria-label="Anterior">‹</button>
      <button onClick={() => go(index + 1)} style={{ ...styles.navBtn, right: 12 }} aria-label="Próximo">›</button>

      <div style={styles.dots}>
        {players.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            style={{
              ...styles.dot,
              opacity: i === index ? 1 : 0.45,
              boxShadow: i === index ? "0 0 14px rgba(40,234,143,0.8)" : "none"
            }}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    position: "relative",
    width: "100%",
    height: "68vh",
    minHeight: 420,
    maxHeight: 820,
    overflow: "hidden",
    borderRadius: 18,
    border: "1px solid rgba(40,234,143,0.25)",
    background: "#060907"
  },
  stage: {
    display: "flex",
    width: "100%",
    height: "100%",
    transition: "transform 600ms cubic-bezier(.2,.8,.2,1)"
  },
  slide: {
    position: "relative",
    flex: "0 0 100%",
    height: "100%"
  },
  imageWrap: {
    position: "relative",
    width: "100%",
    height: "100%"
  },
  overlay: {
    position: "absolute",
    left: 20,
    bottom: 20,
    padding: "14px 16px",
    borderRadius: 12,
    background: "linear-gradient(180deg, rgba(6, 9, 7, 0.75) 0%, rgba(6, 9, 7, 0.35) 100%)",
    border: "1px solid rgba(40,234,143,0.5)",
    color: "#eafff4",
    backdropFilter: "blur(6px)",
    maxWidth: "min(80%, 580px)"
  },
  badge: {
    display: "inline-flex",
    gap: 8,
    alignItems: "center",
    marginBottom: 6
  },
  badgeNum: {
    color: "#0a0f0c",
    background: "linear-gradient(90deg, #28ea8f, #04c56e)",
    borderRadius: 999,
    padding: "4px 10px",
    fontWeight: 800
  },
  badgePos: {
    color: "#aaffd7",
    borderRadius: 999,
    padding: "4px 10px",
    border: "1px solid rgba(40,234,143,0.35)"
  },
  name: {
    margin: "0 0 6px 0",
    fontSize: 32,
    lineHeight: 1.1,
    color: "#bfffe6",
    textShadow: "0 0 12px rgba(40,234,143,0.45)"
  },
  meta: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap"
  },
  metaPill: {
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(40,234,143,0.12)",
    border: "1px solid rgba(40,234,143,0.25)",
    color: "#92ffd1",
    fontSize: 13
  },
  noImage: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(60% 60% at 50% 50%, rgba(40,234,143,0.25), rgba(4,197,110,0.08)), #050806",
    display: "grid",
    placeItems: "center"
  },
  glow: {
    position: "absolute",
    inset: 0,
    boxShadow: "inset 0 0 120px rgba(40,234,143,0.18), inset 0 0 260px rgba(4,197,110,0.12)",
    pointerEvents: "none"
  },
  navBtn: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 42,
    height: 42,
    borderRadius: 999,
    border: "1px solid rgba(40,234,143,0.5)",
    background: "rgba(6,9,7,0.55)",
    color: "#bfffe6",
    cursor: "pointer",
    fontSize: 22
  },
  dots: {
    position: "absolute",
    bottom: 12,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: 8
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 999,
    border: "1px solid rgba(40,234,143,0.6)",
    background: "rgba(40,234,143,0.6)"
  }
};