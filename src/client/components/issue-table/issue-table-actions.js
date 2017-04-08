/**
 * Created by chia-yenhung on 4/7/17.
 */
import { RAILS_RAILS_ISSUES } from "../../utils/api-locator";
import { createPromise } from "../../utils/promise-creator";

import {
  ISSUE_TABLE_GET_ISSUES,
  ISSUE_TABLE_GET_ISSUES_SUCCESS,
  ISSUE_TABLE_GET_ISSUES_FAILED
} from "./issue-table-action-types";

export const getIssues = () => {
  return {
    type: ISSUE_TABLE_GET_ISSUES
  };
};

export const getIssuesSuccess = (data) => {
  return {
    type: ISSUE_TABLE_GET_ISSUES_SUCCESS,
    data
  };
};

export const getIssuesFailed = (error) => {
  return {
    type: ISSUE_TABLE_GET_ISSUES_FAILED,
    error
  };
};

export const fetchIssues = () => {
  return (dispatch) => {
    const opts =
      {
        url: RAILS_RAILS_ISSUES
      };
    dispatch(getIssues());
    return createPromise(opts)
      .then((data) => {
        dispatch(getIssuesSuccess(data));
      })
      .catch((error) => {
        dispatch(getIssuesFailed(error));
      });
  };
};
