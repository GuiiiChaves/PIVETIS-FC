"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function LogoutButton() {
  const router = useRouter();
  const onLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.refresh();
    router.push("/");
  };
  return (
    <button
      onClick={onLogout}
      style={{
        background: "transparent",
        color: "#a8ffd9",
        fontWeight: 700,
        padding: "10px 14px",
        borderRadius: 10,
        border: "1px solid rgba(77,255,166,0.25)",
        cursor: "pointer",
      }}
    >
      Sair
    </button>
  );
}