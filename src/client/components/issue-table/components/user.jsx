import React, {PropTypes} from "react";

const User = (props) => {
  const {
    value: {
      login,
      avatar_url
    } = {}
  } = props;
  return (
    <span
      className="table-column-user">
      <img
        className="img-thumbnail"
        src={avatar_url}/>
      { login }
    </span>
  );
};

export default User;
