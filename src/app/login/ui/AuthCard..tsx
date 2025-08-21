
import { ReactNode } from "react";
import styles from "./login.module.css";

type Props = {
  children: ReactNode;
};

export default function AuthCard({ children }: Props) {
  return <div className={styles.card}>{children}</div>;
}