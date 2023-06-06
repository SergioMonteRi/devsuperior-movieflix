type Genre = {
  id: number;
  name: string;
};

export type LoginData = {
  username: string;
  password: string;
};

export type SpringPage<T> = {
  content: T[];
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  numberOfElements?: number;
  empty: boolean;
};

export type Movie = {
  id: number;
  title: string;
  subTitle: string;
  year: string;
  imgUrl: string;
  synopsis?: string;
  genre?: Genre;
};

export type Params = {
  page: number;
  size: number;
  genreId?: number;
};
