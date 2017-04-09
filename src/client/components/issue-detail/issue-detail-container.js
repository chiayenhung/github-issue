/**
 * Created by chia-yenhung on 4/8/17.
 */
import { connect } from "react-redux";
import IssueDetail from "./issue-detail";

const mapStateToProps = (state) => {
  return state.issueDetail;
};

export default connect(
  mapStateToProps
)(IssueDetail);
