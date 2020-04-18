import React from 'react';

import { Switch, Route } from "react-router-dom";

import RentalHome from "./pages/RentalHome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const Routes = () => {
  return (
    <div className="container vicinity-container is-fluid">
      <Switch>
        <Route exact path="/">
          <RentalHome />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </div>
  )
}

export default Routes;