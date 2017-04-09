import React, {PropTypes} from "react";
import { Router, Route, browserHistory } from "react-router";
import IssueTable, { mounts as issueTableMounts } from "./components/issue-table";
import IssueDetail from "./components/issue-detail";

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route
        path="/"
        component={IssueTable}
        onEnter={issueTableMounts.onEnter}/>
      <Route
        path="/issue/:number"
        component={IssueDetail}/>
    </Router>
  );
};

export default Routes;
