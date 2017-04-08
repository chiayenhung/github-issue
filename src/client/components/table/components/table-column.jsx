import React, {PropTypes} from "react";

const TableColumn = (props) => {
  const {
    column = { },
    value
  } = props;

  const Column = column.component || "span";

  return (
    <div>
      <Column
        value={value}>
        { typeof value === "string" ? value : "" }
      </Column>
    </div>
  );
};

export default TableColumn;
