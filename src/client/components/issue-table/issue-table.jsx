import React, {PropTypes} from "react";
import Table from "../table";
import { columns, results } from "./issue-table-config";

const IssueTable = (props) => {
  // const {
  //   results = []
  // } = props;
  return (
    <div>
      <Table
        columns={columns}
        results={results}/>
    </div>
  );
};

export default IssueTable;
