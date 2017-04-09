/**
 * Created by chia-yenhung on 4/7/17.
 */
import { RAILS_RAILS_ISSUES } from "../../utils/api-locator";
import { createPromise } from "../../utils/promise-creator";
import { actions as spinnerActions } from "../../components/spinner";
import getPage from "./selectors/page-selector";
import getPerPage from "./selectors/per-page-selector";

import {
  ISSUE_TABLE_GET_ISSUES,
  ISSUE_TABLE_GET_ISSUES_SUCCESS,
  ISSUE_TABLE_GET_ISSUES_FAILED,
  ISSUE_TABLE_NAV_PAGE
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
  return (dispatch, getState) => {
    const data = {
      page: getPage(getState()),
      per_page: getPerPage(getState())
    };
    const opts =
      {
        url: RAILS_RAILS_ISSUES,
        data
      };
    dispatch(getIssues());
    dispatch(spinnerActions.openSpinner());
    return createPromise(opts)
      .then((data) => {
        dispatch(spinnerActions.closeSpinner());
        dispatch(getIssuesSuccess(data));
      })
      .catch((error) => {
        dispatch(spinnerActions.closeSpinner());
        dispatch(getIssuesFailed(error));
      });
  };
};

export const navPage = (nextPage) => {
  return {
    type: ISSUE_TABLE_NAV_PAGE,
    nextPage
  };
};
