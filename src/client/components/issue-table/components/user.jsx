import React, {PropTypes} from "react";

const User = (props) => {
  const {
    value: {
      login
    } = {}
  } = props;
  return (
    <span>
      { login }
    </span>
  );
};

export default User;
