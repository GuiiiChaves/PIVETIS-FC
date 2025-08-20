// src/app/login/ui/Input.tsx
"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./login.module.css";

type Props = {
  label: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { label, error, id, className, ...rest },
  ref
) {
  const inputId = id || rest.name || `input-${label.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div className={styles.field}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>
      <input
        ref={ref}
        id={inputId}
        className={`${styles.input} ${error ? styles.inputError : ""} ${className || ""}`}
        {...rest}
      />
      {error ? <p className={styles.errorMsg}>{error}</p> : null}
    </div>
  );
});

export default Input;