import React, {PropTypes} from "react";
import { Router, Route, browserHistory } from "react-router";
// import createBrowserHistory from "history"
import IssueTable, { mounts as issueTableMounts } from "./components/issue-table";

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={IssueTable} onEnter={issueTableMounts.onEnter}/>
    </Router>
  );
};

export default Routes;
