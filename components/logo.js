import Link from "next/link";
import styles from "../src/styles/logo.module.css";

export default function Logo({ boxOn = false }) {
  return (
    <Link href={"/"} className={boxOn ? styles.box : styles.basic}>
      PortFolio Web
    </Link>
  );
}
