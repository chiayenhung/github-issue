/**
 * Created by chia-yenhung on 4/5/17.
 */
import React from "react";
import Spinner from "../spinner";

const Home = (props) => {
  const {
    children
  } = props;
  return (
    <div
      className="container-fluid">
      { children }
      <Spinner/>
    </div>
  );
};

export default Home;
