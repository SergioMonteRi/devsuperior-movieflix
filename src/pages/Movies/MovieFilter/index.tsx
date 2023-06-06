import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

import { Genre } from "types/types";

import { requestAllGenres } from "util/requests/Genre/genreRequest";

import "./styles.css";

export type MovieFilterData = {
  movieGenre: Genre | null;
};

type Props = {
  onSubmitFilter: (data: MovieFilterData) => void;
};

const MovieFilter = ({ onSubmitFilter }: Props) => {
  const [selectGender, setSelectGender] = useState<Genre[]>([]);

  const { handleSubmit, control, setValue, getValues } =
    useForm<MovieFilterData>();

  const onSubmit = (formData: MovieFilterData) => {
    console.log(formData);
  };

  const handleChangeGenre = (value: Genre) => {
    setValue("movieGenre", value);

    const obj: MovieFilterData = {
      movieGenre: getValues("movieGenre"),
    };

    onSubmitFilter(obj);
  };

  useEffect(() => {
    requestAllGenres().then((response) => {
      setSelectGender(response.data);
    });
  }, []);

  return (
    <div className="movie-filter-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="movieGenre"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={selectGender}
              isClearable
              placeholder="Gênero"
              classNamePrefix="genre-filter-select"
              onChange={(value) => handleChangeGenre(value as Genre)}
              getOptionLabel={(gender: Genre) => gender.name}
              getOptionValue={(category: Genre) => String(category.id)}
            />
          )}
        />
      </form>
    </div>
  );
};

export default MovieFilter;
