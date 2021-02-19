import React, {useState} from "react";
import EmployeeTableRows from "./EmployeeTableRows"

function EmployeeTableList(props) {

  const [sortorder, setSortOrder] = useState('desc');


  function compareValues(key, order) {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        console.log("property does not exist");
        return 0;
      }
       
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      console.log(order);
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

  function handleSortEmail() {
    if (sortorder === 'asc') {
      setSortOrder('desc');
    } else {
      setSortOrder('asc');
    }
   props.list.sort(compareValues('email',sortorder));
  }

  function handleSortPhone() {
    if (sortorder === 'asc') {
      setSortOrder('desc');
    } else {
      setSortOrder('asc');
    }
   props.list.sort(compareValues('phone',sortorder));
  }


  return (
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col" onClick={handleSortEmail}>Email &darr;</th>
      <th scope="col" onClick={handleSortPhone}>Phone &darr;</th>
    </tr>
  </thead>
  <tbody>
     {props.list.filter(listitem => listitem.name.first.includes(props.search_term)).map(item => 
       <EmployeeTableRows imgsrc={item.picture.medium} fname={item.name.first} lname={item.name.last} email={item.email} phone={item.phone} />
     )}
  </tbody>
</table>
  );
}

export default EmployeeTableList;