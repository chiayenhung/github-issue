/**
 * Created by chia-yenhung on 4/8/17.
 */
import { RAILS_RAILS_ISSUES } from "../../utils/api-locator";
import { createPromise } from "../../utils/promise-creator";
import { actions as spinnerActions } from "../../components/spinner";
import {
  ISSUE_DETAIL_GET_DETAIL,
  ISSUE_DETAIL_GET_DETAIL_SUCCESS,
  ISSUE_DETAIL_GET_DETAIL_FAILED
} from "./issue-detail-action-types";

export const getIssueDetail = () => {
  return {
    type: ISSUE_DETAIL_GET_DETAIL
  };
};

export const getIssueDetailSuccess = (data) => {
  return {
    type: ISSUE_DETAIL_GET_DETAIL_SUCCESS,
    data
  };
};

export const getIssueDetailFailed = (error) => {
  return {
    type: ISSUE_DETAIL_GET_DETAIL_FAILED,
    error
  };
};

export const fetchIssueDetail = (issueNumber) => {
  return (dispatch) => {
    const opts = {
      url: `${RAILS_RAILS_ISSUES}/${issueNumber}`
    };
    dispatch(getIssueDetail());
    dispatch(spinnerActions.openSpinner());
    return createPromise(opts)
      .then((data) => {
        dispatch(spinnerActions.closeSpinner());
        dispatch(getIssueDetailSuccess(data));
      })
      .catch((error) => {
        dispatch(spinnerActions.closeSpinner());
        dispatch(getIssueDetailFailed(error));
      });
  };
};

