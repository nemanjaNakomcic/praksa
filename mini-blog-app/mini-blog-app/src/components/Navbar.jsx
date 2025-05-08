import styles from "@/styles/layout/navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href={"/"}>Home</Link>
    </nav>
  );
}
