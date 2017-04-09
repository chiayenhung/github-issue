import React, {PropTypes} from "react";
import Table from "../table";
import { columns } from "./comments-config";

const Comments = (props) => {
  const {
    comments
  } = props;
  return (
    <div>
      <Table
        columns={columns}
        results={comments}/>
    </div>
  );
};

export default Comments;
