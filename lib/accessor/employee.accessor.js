const Employee = require('../models/employee.model');

const addEmployee = async (employee) => {
  employee.save();
};

const getEmployeeById = async (id) => {
  let employee = await Employee.findOne({ empl_id: id});
  return employee;
};

const removeEmployeeById = async (id) => {
  await Employee.deleteOne({ empl_id: id});
};

const getAllEmployees = async () => {
  return await Employee.find();
};

const setSupervisor = async (empl_id, sup_id) => {
  await Employee.updateOne({ empl_id: empl_id }, { supervisor_id: sup_id});
};

module.exports = {
  addEmployee,
  getEmployeeById,
  removeEmployeeById,
  getAllEmployees,
  setSupervisor
}

