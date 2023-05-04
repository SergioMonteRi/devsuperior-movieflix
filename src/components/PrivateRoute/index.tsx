import { Redirect, Route } from "react-router-dom";

import { isAuthenticated } from "util/auth/auth";

type PriveRoutProps = {
  children: React.ReactNode;
  path: string;
};

const PrivateRoute = ({ children, path }: PriveRoutProps) => {
  return (
    <Route
      path={path}
      render={({ location }) =>
        !isAuthenticated() ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
};

export default PrivateRoute;
