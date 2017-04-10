import React, {PropTypes} from "react";
import { getParagraphs } from "./utils";

const Mentions = (props) => {
  const {
    value
  } = props;
  return (
    <p>
      { getParagraphs(value) }
    </p>
  );
};

export default Mentions;
