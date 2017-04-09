/**
 * Created by chia-yenhung on 4/8/17.
 */
import store from "../../store";
import { fetchIssueDetail } from "./issue-detail-actions";

export const onEnter = (location) => {
  const {
    params: {
      number
    } = {}
  } = location;
  store.dispatch(fetchIssueDetail(number));
};
