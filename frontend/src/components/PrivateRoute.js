import React from "react";
import { Redirect, Route } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  //   console.log("Rest", rest);
  return (
    <Route
      {...rest}
      render={(props) => {
        // console.log("Props", props);
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;

// <PrivateRoute exact path="/" component={Dashboard} />;
