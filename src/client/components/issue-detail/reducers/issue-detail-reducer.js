/**
 * Created by chia-yenhung on 4/8/17.
 */
import {
  ISSUE_DETAIL_GET_DETAIL_SUCCESS,
  ISSUE_DETAIL_GET_DETAIL_FAILED
} from "../issue-detail-action-types";

const issueDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case ISSUE_DETAIL_GET_DETAIL_SUCCESS:
      return action.data;
    case ISSUE_DETAIL_GET_DETAIL_FAILED:
      return {};
    default:
      return state;
  }
};

export default issueDetailReducer;
