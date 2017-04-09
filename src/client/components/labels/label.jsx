import React, {PropTypes} from "react";
import classnames from "classnames";

const getType = (type) => {
  if (type === "open") return "label-primary";
  if (type === "close") return "label-info";
  return "label-default";
};

const Label = (props) => {
  const {
    type,
    label: {
      color,
      name
    } = {}
  } = props;
  if (!name) return null;
  const style = {
    marginLeft: "5px"
  };
  if (color) {
    style.color = `#${color}`;
  }
  const labelType = getType(type);
  const classes = {
    label: true,
    [labelType]: true
  };
  return (
    <span
      className={classnames(classes)}
      style={style}>
      { name }
    </span>
  );
};

export default Label;
