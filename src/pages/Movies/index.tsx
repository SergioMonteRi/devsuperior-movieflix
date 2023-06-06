import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MovieCard from "./MovieCard";
import Pagination from "components/Pagination";

import { Movie, Params, SpringPage } from "util/requests/requests.types";
import { getAllMovies } from "util/requests/MovieRequest/movieRequest";

import "./styles.css";
import MovieFilter, { MovieFilterData } from "./MovieFilter";

type ControlComponentsData = {
  activePage: number;
  filterData: MovieFilterData;
};

const Movies = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: {
        movieGenre: null,
      },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const handleSubmitFilter = (data: MovieFilterData) => {
    setControlComponentsData({
      activePage: 0,
      filterData: data,
    });
  };

  useEffect(() => {
    const params: Params = {
      page: controlComponentsData.activePage,
      size: 4,
      genreId: controlComponentsData.filterData.movieGenre?.id,
    };

    getAllMovies(params).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  return (
    <div className="movies-container ">
      <MovieFilter onSubmitFilter={handleSubmitFilter} />

      <div className="row">
        {page?.content.map((movie) => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            className="col-sm-6 col-xl-3 mb-xl-3"
          >
            <MovieCard movie={movie} />
          </Link>
        ))}

        <Pagination
          pageCount={page ? page.totalPages : 0}
          pageRange={4}
          onChange={handlePageChange}
          forcePage={page?.number}
        />
      </div>
    </div>
  );
};

export default Movies;
