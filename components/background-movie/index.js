import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

import TrailerPlayButton from "../trailer-buton";

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

        <TrailerPlayButton />
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
