import React, {PropTypes} from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Home from "./components/home";
import IssueTable, { mounts as issueTableMounts } from "./components/issue-table";
import IssueDetail, { mounts as issueDetailMounts } from "./components/issue-detail";

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route
        path="/"
        component={Home}>
        <IndexRoute
          component={IssueTable}
          onEnter={issueTableMounts.onEnter}/>
        <Route
          path="/issue/:number"
          component={IssueDetail}
          onEnter={issueDetailMounts.onEnter}/>
      </Route>
    </Router>
  );
};

export default Routes;
