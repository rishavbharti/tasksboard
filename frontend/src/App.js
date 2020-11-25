import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./screens/SignIn";
import HomeScreen from "./screens/HomeScreen";
import SignUp from "./screens/SignUp";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./screens/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./screens/ForgotPassword";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/login" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <PrivateRoute path="/board" component={HomeScreen} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
