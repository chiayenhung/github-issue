/**
 * Created by chia-yenhung on 4/7/17.
 */
import { connect } from "react-redux";
import IssueTable from "./issue-table";

const mapStateToProps = (state) => {
  return state.issueTable;
};

export default connect(
  mapStateToProps
)(IssueTable);
