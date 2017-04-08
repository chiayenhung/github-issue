/**
 * Created by chia-yenhung on 4/5/17.
 */
import React from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux';
import store from "./store";
import Routes from "./routes.jsx";
import "./style/app.styl";

const App = () => {
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
};

ReactDom.render(<App/>, document.getElementById("app"));
