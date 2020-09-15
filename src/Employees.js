import axios from 'axios'
import React from 'react';
import { connect } from 'react-redux';
import {assignEmployee} from './store';
import Employee from './Employee';

class Employees extends React.Component {
  constructor() {
    super()
  }

  async componentDidMount() {
    const employees = (await (axios.get('/api/employees'))).data;
    this.props.assignEmployee(employees);
  }

  render() {
    return (
      <ul>
        {this.props.employees.filter(employee => employee.departmentId === this.props.departmentId).map(employee => <Employee {...employee} key={employee.id}/>)}
      </ul>
    )
  }
}
/*const Employees = ({ department, employees, removeFromDepartment, destroyEmployee })=> {
  return (
      <ul>
        {
          employees.filter( employee => employee.departmentId === (department ? department.id : null )).map( employee => <Employee employee={ employee } removeFromDepartment={ removeFromDepartment } destroyEmployee={ destroyEmployee } key={ employee.id }/>)
        }
      </ul>
  );
};*/

const mapStateToProps = (state) => {
  return {employees: state.employees}
}

const mapDispatchToProps = (dispatch) => {
  return {
    assignEmployee: function (employees) {
      dispatch(assignEmployee(employees));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
