/**
 * Created by chia-yenhung on 4/7/17.
 */
import {
  ISSUE_TABLE_GET_ISSUES_SUCCESS,
  ISSUE_TABLE_GET_ISSUES_FAILED
} from "../issue-table-action-types";

const issuesReducer = (state = [], action) => {
  switch (action.type) {
    case ISSUE_TABLE_GET_ISSUES_SUCCESS:
      return action.data;
    case ISSUE_TABLE_GET_ISSUES_FAILED:
      return [];
    default:
      return state;
  }
};

export default issuesReducer;
