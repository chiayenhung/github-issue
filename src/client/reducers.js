/**
 * Created by chia-yenhung on 4/5/17.
 */
import { combineReducers } from "redux";
import { issueTableReducers as issueTable } from "./components/issue-table";
import { IssueDetailReducers as issueDetail } from "./components/issue-detail";
import { SpinnerReducers as spinner } from "./components/spinner";

export default combineReducers({
  issueTable,
  issueDetail,
  spinner
});
