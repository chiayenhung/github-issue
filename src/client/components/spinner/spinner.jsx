import React, {PropTypes} from "react";

const Spinner = (props) => {
  const {
    show
  } = props;
  if (!show) return null;
  return (
    <div
      className="spinner">
      <i
        className="glyphicon glyphicon-refresh spinning"/>
    </div>
  );
};

export default Spinner;
