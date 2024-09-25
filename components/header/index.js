import React from "react";
import Link from "next/link";
import { GiFilmProjector } from "react-icons/gi";

import styles from "./styles.module.css";

function Header() {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link className={styles.logo} href="/">
          <GiFilmProjector />
          Movie App
        </Link>
        <nav className={styles.navMenu}>
          <Link href="/about">About</Link>
          <Link href="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
