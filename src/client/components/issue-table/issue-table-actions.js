/**
 * Created by chia-yenhung on 4/7/17.
 */
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
    dispatch(getIssues());
    fetch("https://api.github.com/repos/rails/rails/issues")
      .then((response) => {
        response.json()
          .then((data) => {
            dispatch(getIssuesSuccess(data));
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        dispatch(getIssuesFailed(error));
      });
  };
};
