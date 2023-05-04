import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";

import { AuthContext } from "context/AuthContext";

import { removeAuthData } from "util/storage/storage";
import history from "util/history/history";

import "bootstrap/js/src/collapse.js";

import "./styles.css";
import { getTokenData, isAuthenticated } from "util/auth/auth";

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace("/");
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav p-2 p-xl-4">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-logo">
          <h4>MovieFlix</h4>
        </Link>

        {authContextData.authenticated && (
          <a
            href="/"
            className="navbar-logout-btn"
            onClick={handleLogoutClick}
          >
            SAIR
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
