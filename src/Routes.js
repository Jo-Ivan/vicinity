import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Host from './pages/Host';

const Routes = () => {
  return (
    <div className="container vicinity-container is-fluid">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/host" component={Host} />
      </Switch>
    </div>
  );
};

export default Routes;
