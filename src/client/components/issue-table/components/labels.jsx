import React, {PropTypes} from "react";

const Labels = (props) => {
  const {
    value
  } = props;
  return (
    <span>
      { value.join(", ") }
    </span>
  );
};

export default Labels;
