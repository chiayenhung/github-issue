import React, {PropTypes} from "react";
import Label from "./label";

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
