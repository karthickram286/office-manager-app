
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  empl_id: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  is_supervisor: {
    type: Boolean,
    required: true
  },
  creation_date: {
    type: Date,
    required: true
  },
  supervisor_id: {
    type: String
  }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;