import React, {PropTypes} from "react";
import classnames from "classnames";
import TableColumn from "./table-column";
import { get } from "../utils";

const TableRow = (props) => {
  const {
    result,
    columns = [],
    onRowClick
  } = props;

  const rowStyles = {
    "table-row": true,
    "table-row-clickable": !!onRowClick
  };

  const handleOnRowClick = () => {
    if (onRowClick) {
      onRowClick(result);
    }
  };

  return (
    <div
      className={classnames(rowStyles)}
      onClick={handleOnRowClick}>
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
