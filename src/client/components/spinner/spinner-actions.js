/**
 * Created by chia-yenhung on 4/9/17.
 */
import {
  SPINNER_OPEN,
  SPINNER_CLOSE
} from "./spinner-action-types";

export const openSpinner = () => {
  return {
    type: SPINNER_OPEN
  };
};

export const closeSpinner = () => {
  return {
    type: SPINNER_CLOSE
  };
};
