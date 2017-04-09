/**
 * Created by chia-yenhung on 4/9/17.
 */
import { SPINNER_OPEN, SPINNER_CLOSE } from "./spinner-action-types";

const spinnerReducers = (state = false, action) => {
  switch (action.type) {
    case SPINNER_OPEN:
      return true;
    case SPINNER_CLOSE:
      return false;
    default:
      return state;
  }
};

export default spinnerReducers;
