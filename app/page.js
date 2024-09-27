import React from "react";

import Movies from "@/data-mocks/movies.json";
import DataCategories from "@/data-mocks/movie-categories.json";
import { BackgorundMoviePoster } from "@/components/background-movie";
import { Categories } from "@/components/categories";

export default function Home() {
  return (
    <div>
      <BackgorundMoviePoster movie={Movies.results[12]} />
      <Categories categories={DataCategories.genres} />
    </div>
  );
}
