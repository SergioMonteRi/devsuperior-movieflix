export type MovieReview = {
  id: number;
  text: string;
  movieId: number;
  user: {
    id: number;
    name: string;
    email: string;
  };
};

export type Genre = {
  name: string;
  id: number;
}