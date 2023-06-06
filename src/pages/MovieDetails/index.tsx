import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Reviews from "./Reviews";
import ReviewForm from "./ReviewForm";

import { MovieReview } from "types/types";

import { getMovieReviews } from "util/requests/MovieRequest/movieRequest";

import "./styles.css";
import { hasAnyRoles } from "util/auth/auth";
import MovieCardDetails from "./MovieCard";

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [reviews, setReviews] = useState<MovieReview[]>([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  const onSubmitReview = (review: MovieReview) => {
    const auxReviews = [...reviews];
    auxReviews.push(review);
    setReviews(auxReviews);
  };

  return (
    <div className="movie-details-container">
      <MovieCardDetails />

      {hasAnyRoles(["ROLE_MEMBER"]) && (
        <ReviewForm onSubmitReview={onSubmitReview} movieId={movieId} />
      )}

      <Reviews movieReviews={reviews} />
    </div>
  );
};

export default MovieDetails;
