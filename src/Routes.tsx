import { Route, Router, Switch } from "react-router-dom";

import Home from "pages/Home";
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";

import Navbar from "components/Navbar";

import history from "util/history/history";

import PrivateRoute from "components/PrivateRoute";

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path={"/"} exact>
        <Home />
      </Route>

      <Route path="/movies" exact>
        <PrivateRoute path="/movies">
          <Movies />
        </PrivateRoute>
      </Route>

      <PrivateRoute path={"/movies/:movieId"} >
        <MovieDetails />
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Routes;
