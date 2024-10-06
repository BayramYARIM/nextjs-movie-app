import React from "react";

import styles from "./styles.module.css";

export const metadata = {
  title: "About | by BY",
  description: "About page description",
};


function AboutPage() {
  return (
    <div className={styles.aboutText}>
      A movie application for education purpose with NextJS
    </div>
  );
}

export default AboutPage;
