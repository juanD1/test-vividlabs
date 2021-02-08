import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "views/Login";
import Home from "views/Home";
import Edit from "views/Edit";
import PrivateRoute from "./PrivateRoute";

const RouteManager = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/home" component={Home} />
      <PrivateRoute exact path="/edit" component={Edit} />
      <Route path="*" component={() => <p>PAGE NOT EXIST</p>} />
    </Switch>
  </Router>
);

export default RouteManager;
