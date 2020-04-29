import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import RentalDetail from "./components/pages/RentalDetail";
import Host from "./components/pages/Host";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/rentals/:id" component={RentalDetail} />
      <Route path="/host" component={Host} />
    </Switch>
  );
};

export default Routes;
