import React, {PropTypes} from "react";
import TableColumn from "./table-column";

const TableHeader = (props) => {
  const {
    columns = []
  } = props;

  return (
    <div
      className="table-header">
      {
        columns.map((column) => {
          const {
            title
          } = column;
          return (
            <TableColumn
              value={title}/>
          );
        })
      }
    </div>
  );
};

export default TableHeader;
