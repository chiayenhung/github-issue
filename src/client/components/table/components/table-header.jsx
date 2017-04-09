import React, {PropTypes} from "react";
import TableColumn from "./table-column";

const TableHeader = (props) => {
  const {
    columns = []
  } = props;

  return (
    <thead
      className="table-header">
      <tr>
        {
          columns.map((column) => {
            const {
              title
            } = column;
            return (
              <TableColumn
                header
                value={title}/>
            );
          })
        }
      </tr>
    </thead>
  );
};

export default TableHeader;
