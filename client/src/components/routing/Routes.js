import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import RentalDetail from "../rentals/RentalDetail";
import Host from "../pages/Host";
import NotFound from "../pages/NotFound";
import Alert from "../../components/layout/Alert";

import GuestRoute from "./GuestRoute";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <>
      <Alert />
      <Switch>
        <Route exact path="/" component={Home} />
        <GuestRoute path="/login" component={Login} />
        <GuestRoute path="/signup" component={Signup} />
        <Route path="/rentals/:id" component={RentalDetail} />
        <PrivateRoute path="/host" component={Host} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
