import React from "react";

import Movies from "@/data-mocks/movies.json";
import DataCategories from "@/data-mocks/movie-categories.json";
import { BackgorundMoviePoster } from "@/components/background-movie";
import { Categories } from "@/components/categories";
import { MoviesCard } from "@/components/movie-card";
import { MovieStateCard } from "@/components/movie-statecard";

export default function Home() {
  return (
    <div>
      <BackgorundMoviePoster movie={Movies.results[12]} />
      <Categories categories={DataCategories.genres} />
      <MovieStateCard 
        title="Released Films"
        movies={Movies.results.slice(8, 18)} />
      <MoviesCard 
        title="Recommended" 
        movies={Movies.results.slice(0, 12)} />
      <MoviesCard
        title="Upcoming Films"
        movies={Movies.results.slice(14, 20)} />
      <MoviesCard 
        title="Top 10 Films" 
        movies={Movies.results.slice(10, 16)} />

    </div>
  );
}
