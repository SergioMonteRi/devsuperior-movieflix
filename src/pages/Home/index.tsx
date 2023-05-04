import { ReactComponent as HomeImg } from "assets/images/home_img.svg";

import LoginCard from "components/LoginCard";

import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-informative-content">
        <h1>Avalie Filmes</h1>
        <h2>Diga o que você achou do seu filme favorito</h2>
        <HomeImg />
      </div>
      <div className="home-login-card-container">
        <LoginCard />
      </div>
    </div>
  );
};

export default Home;
