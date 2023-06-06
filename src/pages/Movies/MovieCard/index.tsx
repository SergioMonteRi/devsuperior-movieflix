import { Movie } from "util/requests/requests.types";

import "./styles.css";

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="movie-card-container">
      <img src={movie.imgUrl} alt={movie.title} className="movie-card-img" />
      <div className="movie-card-information">
        <h1 className="movie-card-title">{movie.title}</h1>
        <h2 className="movie-card-year">{movie.year}</h2>
        <p className="movie-card-subtitle">{movie.subTitle}</p>
      </div>
    </div>
  );
};

export default MovieCard;
