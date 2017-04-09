/**
 * Created by chia-yenhung on 4/7/17.
 */
import { connect } from "react-redux";
import IssueTable from "./issue-table";
import { navPage, fetchIssues } from "./issue-table-actions";

const mapStateToProps = (state) => {
  return state.issueTable;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNavPage: (nextPage) => {
      dispatch(navPage(nextPage));
      dispatch(fetchIssues());
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueTable);
