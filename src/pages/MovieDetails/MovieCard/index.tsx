import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Movie } from "util/requests/requests.types";
import { getMovieById } from "util/requests/MovieRequest/movieRequest";

import "./styles.css";

type UrlParams = {
  movieId: string;
};

const MovieCardDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    getMovieById(movieId)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.warn("error", error);
      });
  }, [movieId]);

  return (
    <div className="movie-card-details-container">
      <img className="movie-card-details-img" src={movie?.imgUrl} alt={movie?.title} />
      <div className="movie-card-details-information">
        <h1 className="movie-card-title">{movie?.title}</h1>
        <h2 className="movie-card-year">{movie?.year}</h2>
        <p className="movie-card-subtitle">{movie?.subTitle}</p>
        <article className="movie-card-details-synopsis">{movie?.synopsis}</article>
      </div>
    </div>
  );
};

export default MovieCardDetails;
