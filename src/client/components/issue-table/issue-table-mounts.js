/**
 * Created by chia-yenhung on 4/7/17.
 */
import store from "../../store";
import { fetchIssues } from "./issue-table-actions";

export const onEnter = () => {
  store.dispatch(fetchIssues());
};
