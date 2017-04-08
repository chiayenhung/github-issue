import React, {PropTypes} from "react";
import Table from "../table";
import { columns } from "./issue-table-config";

const IssueTable = (props) => {
  const {
    issues = []
  } = props;
  return (
    <div>
      <Table
        columns={columns}
        results={issues}/>
    </div>
  );
};

export default IssueTable;
