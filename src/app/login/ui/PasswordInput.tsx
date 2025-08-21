// src/app/login/ui/PasswordInput.tsx
"use client";

import { useState, forwardRef, InputHTMLAttributes } from "react";
import styles from "./login.module.css";

type Props = {
  label: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const PasswordInput = forwardRef<HTMLInputElement, Props>(function PasswordInput(
  { label, error, id, className, ...rest },
  ref
) {
  const [show, setShow] = useState(false);
  const inputId = id || rest.name || `input-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className={styles.field}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>

      <div className={styles.passwordWrap}>
        <input
          ref={ref}
          id={inputId}
          type={show ? "text" : "password"}
          className={`${styles.input} ${error ? styles.inputError : ""} ${className || ""}`}
          {...rest}
        />
        <button
          type="button"
          className={styles.togglePwd}
          aria-label={show ? "Ocultar senha" : "Mostrar senha"}
          onClick={() => setShow((s) => !s)}
        >
          {show ? "Ocultar" : "Mostrar"}
        </button>
      </div>

      {error ? <p className={styles.errorMsg}>{error}</p> : null}
    </div>
  );
});

export default PasswordInput;