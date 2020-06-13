const EmployeeSchema = require('../schema/employee.schema');

let employeeValidate = async (object) => {
  const valid = EmployeeSchema.validate(object);
  if (valid.error) {
    throw new Error(JSON.stringify({
      statusCode: 400,
      message: valid.error.details[0].message
    }));
  }
};

let handleError = (res, error) => {
  console.log(error);
  error = JSON.parse(error.message);

  if (error.statusCode === 409 || error.statusCode === 400 || error.statusCode === 404 || error.statusCode === 403) {
    res.status(error.statusCode).send(error.message);
  } else {
    res.status(500).send('Internal server error');
  }
};

module.exports = {
  employeeValidate,
  handleError
}