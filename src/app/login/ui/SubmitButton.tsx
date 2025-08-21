// src/app/login/ui/SubmitButton.tsx
"use client";

import styles from "./login.module.css";

type Props = {
  loading?: boolean;
  children: React.ReactNode;
};

export default function SubmitButton({ loading, children }: Props) {
  return (
    <button
      type="submit"
      className={`${styles.button} ${loading ? styles.buttonLoading : ""}`}
      disabled={loading}
    >
      {loading ? (
        <>
          <span className={styles.spinner} aria-hidden />
          Entrando...
        </>
      ) : (
        children
      )}
    </button>
  );
}