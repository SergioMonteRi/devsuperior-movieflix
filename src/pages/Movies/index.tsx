import { Link } from "react-router-dom";

import "./styles.css";

const Movies = () => {

  return (
    <div className="movies-container p-xl-4">
      <h1>Tela de listagem de filmes</h1>
      <div className="movies-itens">
        <Link to="/movies/1" className="mb-3">Acessar /movies/1</Link>
        <Link to="/movies/2">Acessar /movies/2</Link>
      </div>
    </div>
  );
};

export default Movies;
