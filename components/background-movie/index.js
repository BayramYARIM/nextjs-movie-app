import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTrailer } from "react-icons/fa";
import styles from "./styles.module.css";

function BackgorundMoviePoster({ movie = {}, isShortText = true }) {
  const { poster_path, title, overview } = movie;

  return (
    <div className={styles.movieWrapper}>
      <h1 className={styles.movieTitle}>{title}</h1>
      <p
        className={`${styles.overview} ${
          isShortText ? styles.shortOverview : ""
        }`}
      >
        {overview}
      </p>
      <div className={styles.actionButtons}>
        <Link
          className={styles.detailButton}
          href={`/movie-detail/${movie.id}`}
        >
          Detail
        </Link>
        <button className={styles.trailerButton}>
          <Link href={"/trailer?popup=true"}>
            <FaTrailer />
          </Link>
        </button>
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

export { BackgorundMoviePoster };
