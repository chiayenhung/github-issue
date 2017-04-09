import React, {PropTypes} from "react";
import { Router, Route, browserHistory } from "react-router";
import IssueTable, { mounts as issueTableMounts } from "./components/issue-table";
import IssueDetail, { mounts as issueDetailMounts } from "./components/issue-detail";

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route
        path="/"
        component={IssueTable}
        onEnter={issueTableMounts.onEnter}/>
      <Route
        path="/issue/:number"
        component={IssueDetail}
        onEnter={issueDetailMounts.onEnter}/>
    </Router>
  );
};

export default Routes;
