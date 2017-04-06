/**
 * Created by chia-yenhung on 4/5/17.
 */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export default createStore(
  reducers,
  applyMiddleware(thunk)
);
