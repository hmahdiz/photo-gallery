import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "../views/not-found";
import App from "../views/items";

const AppRoutes = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/notfound/" component={NotFound} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default AppRoutes;
