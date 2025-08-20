// src/app/login/page.tsx
import type { Metadata } from "next";
import styles from "./ui/login.module.css";
import Branding from "./ui/Branding";
import AuthCard from "./ui/AuthCard.";
import LoginForm from "./ui/LoginForm";

export const metadata: Metadata = {
  title: "Login — Pivetis FC",
  description: "Entre no time dos Pivetis para acessar áreas exclusivas.",
};

export default function LoginPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.brandingArea}>
          <Branding />
        </section>

        <section className={styles.formArea}>
          <AuthCard>
            <h1 className={styles.cardTitle}>Entrar</h1>
            <p className={styles.cardSubtitle}>
              Bem-vindo de volta! Use suas credenciais para acessar o time dos Pivetis.
            </p>

            <LoginForm />

            <div className={styles.cardFooter}>
              <a href="/" className={styles.link}>
                ← Voltar para a Home
              </a>
            </div>
          </AuthCard>
        </section>
      </div>
    </main>
  );
}