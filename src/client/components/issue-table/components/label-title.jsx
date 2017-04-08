import React, {PropTypes} from "react";

const LabelTitle = (props) => {
  const {
    value: {
      title,
      number
    } = {}
  } = props;
  return (
    <div>
      <div>
        { `Issue No: ${number}` }
      </div>
      <div>
        { `Issue title: ${title}` }
      </div>
    </div>
  );
};

export default LabelTitle;
