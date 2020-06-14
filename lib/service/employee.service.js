const employeeAccessor = require('../accessor/employee.accessor');
const Employee = require('../models/employee.model');
const _ = require('lodash');
const { all } = require('../routes/employee.routes');
const { getEmployeeById } = require('../accessor/employee.accessor');

const addEmployee = async (payload) => {
  let isEmplExist = await employeeAccessor.getEmployeeById(payload.empl_id);

  if (_.isEmpty(isEmplExist)) {
    const employee = new Employee({
      empl_id: payload.empl_id,
      firstname: payload.firstname,
      lastname: payload.lastname,
      position: payload.position,
      is_supervisor: payload.is_supervisor,
      creation_date: Date.now()
    });
    
    await employeeAccessor.addEmployee(employee);
  }
  else {
    throw new Error(JSON.stringify({
      statusCode: 409,
      message: `Employee ${payload.empl_id} already exists`
    }));
  }
};

const deleteEmployee = async (empl_id) => {
  let isEmplExist = await employeeAccessor.getEmployeeById(empl_id);

  if (!_.isEmpty(isEmplExist)) {
    await employeeAccessor.removeEmployeeById(empl_id);
  } else {
    throw new Error(JSON.stringify({
      statusCode: 404,
      message: `Employee ${empl_id} doesn't exist`
    }));
  }
};

const getAllEmployees = async () => {
  let allEmployees = await employeeAccessor.getAllEmployees();

  if (!_.isEmpty(allEmployees)) {
    return allEmployees;
  } else {
    throw new Error(JSON.stringify({
      statusCode: 404,
      message: `No employees found`
    }));
  }
};

const getEmployee = async (empl_id) => {
  let employee = await employeeAccessor.getEmployeeById(empl_id);

  if (!_.isEmpty(employee)) {
    return employee;
  } else {
    throw new Error(JSON.stringify({
      statusCode: 404,
      message: `Employee ${empl_id} not found`
    }));
  }
};

const getAllEmplIds = async (empl_id) => {
  let allEmplIds = await employeeAccessor.getAllEmplIds();

  if (!_.isEmpty(allEmplIds)) {
    return allEmplIds;
  } else {
    throw new Error(JSON.stringify({
      statusCode: 404,
      message: `No employees found`
    }));
  }
};

const linkEmployees = async (empl_id, sup_id) => {
  let employee = await getEmployeeById(empl_id);
  let supervisor = await getEmployeeById(sup_id);

  if (_.isEmpty(employee)) {
    throw new Error(JSON.stringify({
      statusCode: 404,
      message: `Employee ${empl_id} not found`
    }));
  } else if (_.isEmpty(supervisor)) {
    throw new Error(JSON.stringify({
      statusCode: 404,
      message: `Supervisor ${sup_id} not found`
    }));
  } else if (!supervisor.is_supervisor) {
    throw new Error(JSON.stringify({
      statusCode: 403,
      message: `Employee ${sup_id} is not a supervisor`
    }));
  }

  employeeAccessor.setSupervisor(empl_id, sup_id);
};

module.exports = {
  addEmployee,
  deleteEmployee,
  getAllEmployees,
  getEmployee,
  getAllEmplIds,
  linkEmployees
}