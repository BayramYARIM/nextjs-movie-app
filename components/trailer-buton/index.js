"use client";

import { useState } from "react";
import { FaTrailer } from "react-icons/fa";
import styles from "./styles.module.css";
import TrailerPopup from "../trailer-popup";

const TrailerPlayButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className={styles.trailerButton} onClick={openModal}>
        <FaTrailer />
      </button>
      <TrailerPopup isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default TrailerPlayButton;
