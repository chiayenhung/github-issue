import React, {PropTypes} from "react";
import TableHeader from "./components/table-header";
import TableRow from "./components/table-row";

const Table = (props) => {
  const {
    columns = [],
    results = [],
    onRowClick
  } = props;
  return (
    <table
      className="table table-striped table-hover">
      <TableHeader
        columns={columns}/>
      <tbody>
        {
          results.map((result) => {
            return (
              <TableRow
                columns={columns}
                result={result}
                onRowClick={onRowClick}/>
            );
          })
        }
      </tbody>
    </table>
  );
};

export default Table;
