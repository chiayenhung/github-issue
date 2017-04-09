import React, {PropTypes} from "react";
import Table from "../table";
import Paginator from "../paginator";
import { columns } from "./issue-table-config";

const IssueTable = (props) => {
  const {
    issues = [],
    page,
    perPage,
    router: {
      push
    } = {},
    onNavPage
  } = props;

  const handleOnRowClick = (result) => {
    const {
      number
    } = result;
    push(`/issue/${number}`);
  };

  const handleOnNav = (nextPage) => {
    if (onNavPage) {
      onNavPage(nextPage);
    }
  };

  return (
    <div>
      <Paginator
        page={page}
        perPage={perPage}
        issues={issues}
        onNav={handleOnNav}/>
      <Table
        columns={columns}
        results={issues}
        onRowClick={handleOnRowClick}/>
    </div>
  );
};

export default IssueTable;
