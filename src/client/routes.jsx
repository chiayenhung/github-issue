import React, {PropTypes} from "react";
import { Router, Route } from "react-router";
import createBrowserHistory from "history/createBrowserHistory"
import IssueTable from "./components/issue-table";

const Routes = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Route path="/" component={IssueTable}/>
    </Router>
  );
};

export default Routes;
