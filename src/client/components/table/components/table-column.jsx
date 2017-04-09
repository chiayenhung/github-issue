import React, {PropTypes} from "react";

const TableColumn = (props) => {
  const {
    column = { },
    value,
    header
  } = props;

  const ColumnType = header ? "th" : "td";
  const Column = column.component || "span";

  return (
    <ColumnType
      className="table-column">
      <Column
        value={value}>
        { typeof value === "string" ? value : "" }
      </Column>
    </ColumnType>
  );
};

export default TableColumn;
