/**
 * Created by chia-yenhung on 4/9/17.
 */
import { createPromise } from "../../utils/promise-creator";
import {
  COMMENTS_GET_COMMENTS,
  COMMENTS_GET_COMMENTS_SUCCESS,
  COMMENTS_GET_COMMENTS_FAILED
} from "./comments-action-types";

export const getComments = () => {
  return {
    type: COMMENTS_GET_COMMENTS
  };
};

export const getCommentsSuccess = (data) => {
  return {
    type: COMMENTS_GET_COMMENTS_SUCCESS,
    data
  };
};

export const getCommentsFailed = (error) => {
  return {
    type: COMMENTS_GET_COMMENTS_FAILED,
    error
  };
};

export const fetchComments = (url) => {
  return (dispatch) => {
    const opts = { url };
    return createPromise(opts)
      .then((data) => {
        dispatch(getCommentsSuccess(data));
      })
      .catch((error) => {
        dispatch(getCommentsFailed(error));
      });
  };
};
