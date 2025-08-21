// src/app/login/ui/Branding.tsx
"use client";

import Image from "next/image";
import styles from "./login.module.css";

export default function Branding() {
  return (
    <div className={styles.branding}>
      <div className={styles.logoWrap}>
        <Image
          src="/Real_Madrid.png"
          alt="Escudo do Pivetis FC"
          width={120}
          height={120}
          className={styles.logo}
          priority
        />
      </div>

      <h2 className={styles.brandTitle}>
        Pivetis FC
        <span className={styles.brandAccent}>_ORACIOGOAT</span>
      </h2>

      <p className={styles.brandTagline}>
        Onde a tática encontra a paixão, e o adversario treme.
      </p>

      <div className={styles.brandHighlights}>
        <div className={styles.highlightBox}>
          <span className={styles.hlDot} />
          DIV ELITE
        </div>
        <div className={styles.highlightBox}>
          <span className={styles.hlDot} />
          ESTILO ESPANHA 2010
        </div>
        <div className={styles.highlightBox}>
          <span className={styles.hlDot} />
          CRAQUES DE PE
        </div>
      </div>
    </div>
  );
}