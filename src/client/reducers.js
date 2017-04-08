/**
 * Created by chia-yenhung on 4/5/17.
 */
import { combineReducers } from "redux";
import { issueTableReducers as issueTable } from "./components/issue-table";

export default combineReducers({
  issueTable
});
