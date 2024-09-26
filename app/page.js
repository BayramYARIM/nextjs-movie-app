import React from "react";

import Movies from "@/data-mocks/movies.json";
import { BackgorundMoviePoster } from "@/components/background-movie";

export default function Home() {
  return (
    <div>
      <BackgorundMoviePoster movie={Movies.results[12]} />
    </div>
  );
}
