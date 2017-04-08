/**
 * Created by chia-yenhung on 4/7/17.
 */
import { combineReducers } from "redux";
import issues from "./reducers/issues-reducer";
import page from "./reducers/page-reducer";
import perPage from "./reducers/per-page-reducer";

export default combineReducers({
  issues,
  page,
  perPage
});
