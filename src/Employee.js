import React from 'react';

const Employee = ({name, id, departmentId}) => {
  return (
    <li>
      {name}
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
