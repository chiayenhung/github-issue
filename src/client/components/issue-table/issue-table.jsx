import React, {PropTypes} from "react";
import Table from "../table";
import { columns } from "./issue-table-config";

const IssueTable = (props) => {
  const {
    issues = [],
    router: {
      push
    } = {}
  } = props;

  const handleOnRowClick = (result) => {
    const {
      number
    } = result;
    push(`/issue/${number}`);
  };

  return (
    <div>
      <Table
        columns={columns}
        results={issues}
        onRowClick={handleOnRowClick}/>
    </div>
  );
};

export default IssueTable;
