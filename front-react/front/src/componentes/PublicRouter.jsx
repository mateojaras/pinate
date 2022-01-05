import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({ component: Component, authenticated, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          authenticated === false ? <Component {...props} /> : <Redirect to="/principal" />
        }
      />
    );
  };

  export default PublicRoute;