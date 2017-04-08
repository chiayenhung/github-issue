import React, {PropTypes} from "react";
import TableHeader from "./components/table-header";
import TableRow from "./components/table-row";

const Table = (props) => {
  const {
    columns = [],
    results = []
  } = props;
  return (
    <div
      className="table">
      <TableHeader
        columns={columns}/>
      {
        results.map((result) => {
          return (
            <TableRow
              columns={columns}
              result={result}/>
          );
        })
      }
    </div>
  );
};

export default Table;
