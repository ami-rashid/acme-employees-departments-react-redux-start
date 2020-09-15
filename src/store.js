import { createStore } from 'redux';

const ASSIGN_DEPARTMENTS = 'ASSIGN_DEPARTMENTS';
const ASSIGN_EMPLOYEE = 'ASSIGN_EMPLOYEE';
const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';
const FIRE_EMPLOYEE = 'FIRE_EMPLOYEE';

const assignDepartments = (departments) => {
    {
        type: ASSIGN_DEPARTMENTS,
        departments
    }
}

const assignEmployee = (employee) => {
    {
        type: ASSIGN_EMPLOYEE,
        employee
    }
}

const removeEmployee = (employeeId) => {
    {
        type: REMOVE_EMPLOYEE,
        employeeId
    }
}

const fireEmployee = (employeeId) => {
    {
        type: FIRE_EMPLOYEE,
        employeeId
    }
}

const initialState = {
    employees: [],
    departments: []
}

function updateStore (state = initialState, action) {
    switch (action.type) {
        case ASSIGN_DEPARTMENTS:
            const departments = action.departments;
            return {...state, departments};
        case ASSIGN_EMPLOYEE:
            const employee = action.employee
            return {...state, employee}
        case REMOVE_EMPLOYEE:
            const movedEmployee = state.employees.map(employee => {
                if (employee.id === action.id) {
                    return employee.departmentId = null;
                }
            });
            return {...state, employees: movedEmployee}
        case FIRE_EMPLOYEE:
            const firedEmployee = state.employees.filter(employee => employee.id !== action.id);
            return {...state, employees: firedEmployee}
        default:
            return state;
    }
}

const store = createStore(updateStore);

export {
    store,
    assignDepartments,
    assignEmployee,
    removeEmployee,
    fireEmployee
}