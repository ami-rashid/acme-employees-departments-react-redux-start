import React from 'react';

const Employee = ({name, destroyEmployee, removeFromDepartment}) => {
  return (
    <li>
      {name}
      <button onClick={ ()=> destroyEmployee(employee)}>x</button>
      <button onClick={ ()=> removeFromDepartment(employee)}>Remove From Department</button>
    </li>
  )
}

/*const Employee = ({ employee, destroyEmployee, removeFromDepartment })=> {
  return (
    <li key={ employee.id }>
      { employee.name }
      <button onClick={ ()=> destroyEmployee(employee)}>x</button>
      {
        !!removeFromDepartment && (
          <button onClick={ ()=> removeFromDepartment(employee)}>Remove From Department</button>
        )
      }
    </li>
  );
};*/

export default Employee;
