import React, {PropTypes} from "react";
import { Router, Route } from "react-router";
import createBrowserHistory from "history/createBrowserHistory"
import Home from "./components/home";

const Routes = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Route path="/" component={Home}/>
    </Router>
  );
};

export default Routes;
