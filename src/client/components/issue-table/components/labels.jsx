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

const Labels = (props) => {
  const {
    value
  } = props;
  return (
    <div>
    {
      value.map((label) => {
        return <Label key={label.id} label={label}/>
      })
    }
    </div>
  );
};

export default Labels;
