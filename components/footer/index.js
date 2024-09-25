import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

import styles from "./styles.module.css";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Developed with ❤️ by&nbsp; Bayram YARIM
      </footer>
      <div className={styles.social}>
        <Link href={"https://github.com/BayramYARIM"} target="_blank">
          <FaGithub />
        </Link>
        <Link href={"https://www.linkedin.com/in/bayramyarim/"}>
          <FaLinkedin />
        </Link>
        <Link href={"mailto:byyarim@gmail.com"}>
          <FaMailBulk />
        </Link>
      </div>
    </>
  );
}

export default Footer;
