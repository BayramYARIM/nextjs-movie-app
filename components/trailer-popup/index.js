"use client";

import { useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import styles from "./styles.module.css";

const TrailerPopup = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modaloverlay} onClick={onClose}>
      <div className={styles.modalcontent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalclose} onClick={onClose}>
          &times;
        </button>
        <div className={styles.modalbody}>
          <div className={styles.playicon}>
            <FaPlay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerPopup;
