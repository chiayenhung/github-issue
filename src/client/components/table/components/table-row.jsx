import React, {PropTypes} from "react";
import TableColumn from "./table-column";
import { get } from "../utils";

const TableRow = (props) => {
  const {
    result,
    columns = []
  } = props;

  return (
    <div
      className="table-row">
      {
        columns.map((column) => {
          const {
            name
          } = column;
          const value = get(name, result);
          return (
            <TableColumn
              column={column}
              value={value}/>
          );
        })
      }
    </div>
  );
};

export default TableRow;
