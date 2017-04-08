import React, {PropTypes} from "react";

const Summary = (props) => {
  const {
    value = ""
  } = props;
  return (
    <span>
      { value.slice(0, 140) }
    </span>
  );
};

export default Summary;
