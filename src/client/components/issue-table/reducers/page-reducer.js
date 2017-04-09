/**
 * Created by chia-yenhung on 4/8/17.
 */
import { ISSUE_TABLE_NAV_PAGE } from "../issue-table-action-types";

const pageReducer = (state = 1, action) => {
  switch (action.type) {
    case ISSUE_TABLE_NAV_PAGE:
      return action.nextPage;
    default:
      return state;
  }
};

export default pageReducer;
