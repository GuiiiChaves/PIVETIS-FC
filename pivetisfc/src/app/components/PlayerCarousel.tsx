"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./PlayerCarousel.module.css";

type Player = {
  id: string;
  name: string;
  position?: string;
  image: string; // caminho em /public/players/...
};

const players: Player[] = [
  { id: "gu1cs", name: "Oracio", position: "MEI", image: "/players/neymar.webp" },
  { id: "ribbs_19", name: "M. Depay", position: "SA", image: "/players/bellingham.jpg" },
  { id: "ca10", name: "ca10", position: "PE", image: "/players/courtois.jpg" }
];

export default function PlayerCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % players.length);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const goTo = (i: number) => setIndex(i);
  const next = () => setIndex((i) => (i + 1) % players.length);
  const prev = () => setIndex((i) => (i - 1 + players.length) % players.length);

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.banner}>
        <button aria-label="Anterior" className={styles.navBtn} onClick={prev}>‹</button>

        <div className={styles.imageSlot}>
          <Image
            src={players[index].image}
            alt={players[index].name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 60vw"
            style={{ objectFit: "cover" }}
          />
          <div className={styles.overlay}>
            <div className={styles.title}>
              <span className={styles.badge}>{players[index].position ?? "PL"}</span>
              <h2>{players[index].name}</h2>
            </div>
          </div>
        </div>

        <button aria-label="Próximo" className={styles.navBtn} onClick={next}>›</button>
      </div>

      <aside className={styles.sideList} aria-label="Jogadores">
        {players.map((p, i) => (
          <button
            key={p.id}
            className={`${styles.playerBtn} ${i === index ? styles.active : ""}`}
            onClick={() => goTo(i)}
            aria-current={i === index ? "true" : undefined}
          >
            <span className={styles.playerName}>{p.name}</span>
            {p.position && <span className={styles.playerPos}>{p.position}</span>}
          </button>
        ))}
      </aside>
    </div>
  );
}