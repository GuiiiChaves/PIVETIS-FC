// src/app/login/ui/LoginForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "./Input";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";
import styles from "./login.module.css";

const LOGIN_ENDPOINT = "/api/auth/login"; // Ajuste se necessário
const AFTER_LOGIN_PATH = "/time"; // Ajuste para "/dashboard" se preferir

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; senha?: string }>({});

  function validate() {
    const errs: { email?: string; senha?: string } = {};
    if (!email.trim()) errs.email = "Informe seu e-mail";
    if (!senha.trim()) errs.senha = "Informe sua senha";
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);

    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch(LOGIN_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: senha, remember }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const msg = (data && (data.message || data.error)) || "Não foi possível entrar.";
        setFormError(msg);
      } else {
        // Sucesso: redireciona
        router.push(AFTER_LOGIN_PATH);
      }
    } catch (err) {
      setFormError("Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className={styles.form} noValidate>
      <Input
        label="E-mail"
        name="email"
        type="email"
        placeholder="seuemail@exemplo.com"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={fieldErrors.email}
        required
      />

      <PasswordInput
        label="Senha"
        name="password"
        placeholder="••••••••"
        autoComplete="current-password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        error={fieldErrors.senha}
        required
      />

      <div className={styles.formRow}>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <span>Lembrar de mim</span>
        </label>

        <a href="#" className={styles.linkMuted} onClick={(e) => e.preventDefault()}>
          Esqueceu a senha?
        </a>
      </div>

      {formError ? <div className={styles.formError}>{formError}</div> : null}

      <SubmitButton loading={loading}>Entrar</SubmitButton>

      <div className={styles.divider}>
        <span>ou</span>
      </div>

    </form>
  );
}