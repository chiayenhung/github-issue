import React, {PropTypes} from "react";

const Mention = (props) => {
  const {
    mention
  } = props;
  return (
    <a
      href={`https://github.com/${mention && mention.slice(1)}`}
      target="_blank">
      { mention }
    </a>
  );
};

export default Mention;
