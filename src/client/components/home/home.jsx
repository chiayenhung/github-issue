/**
 * Created by chia-yenhung on 4/5/17.
 */
import React from "react";

const Home = (props) => {
  const {
    children
  } = props;
  return (
    <div>
      Home
      { children }
    </div>
  );
};

export default Home;
