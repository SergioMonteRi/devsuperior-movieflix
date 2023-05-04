import { MovieReview } from "types/types";

import { ReactComponent as StarSvg } from "../../../assets/images/review_star.svg";

type ReviewProps = {
  movieReviews?: MovieReview[];
};

const Reviews = ({ movieReviews }: ReviewProps) => {
  return (
    <div className="movie-details-avaliations p-4 bg-secondary rounded mt-4">
      {movieReviews?.map((movie) => (
        <div key={movie.id}>
          <div className="d-flex flex-row align-items-baseline ms-xl-4">
            <StarSvg className="me-2" />
            <p className="fw-bold">{movie.user.name}</p>
          </div>
          <div className="p-2 p-xl-3 border rounded mb-2 mb-xl-4 text-quaternary">
            {movie.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
