/**
 * Created by chia-yenhung on 4/9/17.
 */
import {
  COMMENTS_GET_COMMENTS,
  COMMENTS_GET_COMMENTS_SUCCESS
} from "./comments-action-types"

const commentsReducers = (state = [], action) => {
  switch (action.type) {
    case COMMENTS_GET_COMMENTS:
      return [];
    case COMMENTS_GET_COMMENTS_SUCCESS:
      return action.data;
    default:
      return state;
  }
};

export default commentsReducers;
