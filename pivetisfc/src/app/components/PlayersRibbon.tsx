"use client";

import Image from "next/image";
import { useMemo } from "react";

type Player = {
  id: number | string;
  name: string;
  number?: number;
  position?: string;
  image?: string;
};

export default function PlayersRibbon({
  players,
  speed = 36, // segundos por loop
}: {
  players: Player[];
  speed?: number;
}) {
  // Para fazer o loop suave, duplicamos o array
  const looped = useMemo(() => [...players, ...players], [players]);

  return (
    <div style={styles.wrap}>
      <div
        className="ribbon-track"
        style={{
          ...styles.track,
          animationDuration: `${speed}s`,
        }}
      >
        {looped.map((p, idx) => (
          <div key={`${p.id}-${idx}`} style={styles.card}>
            <div style={styles.avatar}>
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="120px"
                  style={{ objectFit: "cover" }}
                  priority={idx < 6}
                />
              ) : (
                <div style={styles.fallback}>
                  {(p.name || "?")
                    .split(" ")
                    .map((s) => s[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>
              )}
            </div>

            <div style={styles.meta}>
              <span style={styles.name}>
                {p.number ? `#${p.number} ` : ""}
                {p.name}
              </span>
              {p.position ? <span style={styles.pos}>{p.position}</span> : null}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes ribbon-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .ribbon-track {
          animation-name: ribbon-scroll;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          will-change: transform;
        }
        @media (hover: hover) and (pointer: fine) {
          .ribbon-track:hover {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrap: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "6px 0",
    overflow: "hidden",
    maskImage:
      "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
  },
  track: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    width: "200%",
  },
  card: {
    display: "grid",
    gridTemplateColumns: "54px auto",
    alignItems: "center",
    gap: 10,
    padding: "6px 10px",
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.35))",
    border: "1px solid rgba(40,234,143,0.22)",
    borderRadius: 12,
    boxShadow:
      "0 4px 12px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(0,0,0,0.3)",
    color: "rgba(220,255,235,0.95)",
    minWidth: 240,
  },
  avatar: {
    position: "relative",
    width: 54,
    height: 54,
    borderRadius: 10,
    overflow: "hidden",
    boxShadow: "0 0 0 1px rgba(40,234,143,0.25) inset",
    background:
      "radial-gradient(60% 60% at 50% 35%, rgba(40,234,143,0.25), rgba(0,0,0,0.4))",
  },
  fallback: {
    width: "100%",
    height: "100%",
    display: "grid",
    placeItems: "center",
    fontWeight: 800,
    color: "#0a2318",
    background:
      "linear-gradient(180deg, #28ea8f 0%, #04c56e 100%)",
  },
  meta: {
    display: "flex",
    flexDirection: "column",
    lineHeight: 1.15,
  },
  name: {
    fontWeight: 800,
    letterSpacing: "-0.01em",
  },
  pos: {
    marginTop: 2,
    fontSize: 12,
    color: "rgba(200,255,230,0.75)",
  },
};