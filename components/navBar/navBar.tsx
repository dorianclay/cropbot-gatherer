import Link from "next/link";
import styles from "./navBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <Link href="/" className={styles.wordmark}>
        Cropbot 🚜
      </Link>
      <Link href="/gathering" className={styles.navlink}>
        Gather Data
      </Link>
    </div>
  );
}
