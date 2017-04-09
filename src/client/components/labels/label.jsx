import React, {PropTypes} from "react";

const Label = (props) => {
  const {
    label = {}
  } = props;
  if (!label.name) return null;
  const style = {
    marginLeft: "5px",
    color: `#${label.color}`
  };
  return (
    <span
      className="label label-default"
      style={style}>
      { label.name }
    </span>
  );
};

export default Label;
