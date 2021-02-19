import React from "react";

function EmployeeTableRows(props) {
  return (
    <tr>
    <td><img src={props.imgsrc} alt='thumbnail'/></td>
    <td>{props.fname}</td>
    <td>{props.lname}</td>
    <td>{props.email}</td>
    <td>{props.phone}</td>
  </tr>
  );
}

export default EmployeeTableRows;