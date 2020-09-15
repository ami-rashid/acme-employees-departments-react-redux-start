import axios from 'axios'
import React from 'react';
import { connect } from 'react-redux';
import { assignDepartments } from './store'
import Department from './Department';

class Departments extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const departments = (await (axios.get('/api/departments'))).data;
    this.props.assignDepartments(departments);
  }

  render() {
    return (
      <ul className='departments'>
        <Department id = {null}/>
        {this.props.departments.map(department => {
          return (
            <Department key={department.id} {...departments}/>
          )
        })}
      </ul>
    )
  }
}

/*const Departments = ({ departments, employees, destroyEmployee, removeFromDepartment })=> {
  return (
    <ul className='departments'>
      <Department destroyEmployee={ destroyEmployee } employees={ employees } />
      {
        departments.map( department => {
          return (
            <Department
              key = { department.id }
              department = { department }
              employees = { employees }
              destroyEmployee = { destroyEmployee }
              removeFromDepartment = { removeFromDepartment }
            />
          );
        })
      }
    </ul>
  );
}*/

const mapStateToProps = (state) => {
  return {departments: state.departments}
}

const mapDispatchToProps = (dispatch) => {
  return {
    assignDepartments: function (departments) {
      dispatch(assignDepartments(departments));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Departments);
