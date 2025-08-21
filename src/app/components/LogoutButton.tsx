"use client";

export default function LogoutButton() {
  async function handle() {
    await fetch("/api/logout", { method: "POST" });
    window.location.href = "/login";
  }
  return (
    <button onClick={handle} style={btnStyle}>Sair</button>
  );
}

const btnStyle: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 10,
  border: "1px solid rgba(40,234,143,0.5)",
  background: "linear-gradient(180deg, rgba(6,9,7,0.6), rgba(6,9,7,0.3))",
  color: "#aaffd7",
  cursor: "pointer"
};