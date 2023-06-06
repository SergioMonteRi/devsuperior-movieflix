import { useState } from "react";
import { ToastContainer } from "react-toastify";

import { AuthContext, AuthContextData } from "context/AuthContext";

import Routes from "Routes";

import "assets/styles/custom.scss";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <Routes />
      <ToastContainer />
    </AuthContext.Provider>
  );
}

export default App;
