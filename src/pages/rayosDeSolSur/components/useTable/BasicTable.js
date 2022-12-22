import React, { useMemo } from "react";
import { useTable } from "react-table";
import datos from "./datos.json";
//style
import './BasicTable.scss'

const Columns = [
    {
        Header:"Id",
        accessor:"id"
    },
    {
        Header:"Name",
        accessor:"initials"
    },
    {
        Header:"Estado",
        accessor:"isSould"
    }
]



function BasicTable() {


  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => datos, []);

  const tableIstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableIstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroups) => (
          <tr {...headerGroups.getHeaderGroupProps()}>
            {headerGroups.headers.map((column) => (
                 <th {...headerGroups.getHeaderGroupProps()}>{column.render('Header')}</th>
            ))}
           
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps}>
        {rows.map((row) =>{  
            prepareRow(row)
            return(
                <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                        return(
                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        )
                    })}
                    
                </tr>
            )
          
        })}
      
      </tbody>
    </table>
  );
}

export default BasicTable;
