import React from 'react';

const Table = ({
  data,
  columns,
  className = '',
  striped = false,
  bordered = false,
  hover = false,
  responsive = true
}) => {
  const tableClass = `table ${striped ? 'table-striped' : ''} ${bordered ? 'table-bordered' : ''} ${hover ? 'table-hover' : ''} ${className}`;
  
  const tableElement = (
    <table className={tableClass}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key} className={column.className}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((record, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key} className={column.className}>
                  {column.render ? column.render(record[column.key], record) : record[column.key]}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length} className="text-center">No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );

  return responsive ? (
    <div className="table-responsive">{tableElement}</div>
  ) : (
    tableElement
  );
};

export default Table;
