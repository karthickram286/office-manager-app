const express = require('express');
const employeeService = require('../service/employee.service');
const { employeeValidate, handleError } = require('../util/util');

const router = express.Router();

/**
 * @route   POST /api/empl/add
 * @desc    Creates a new employee
 * @access  Public
 */
router.post('/add', async (req, res) => {

  try {
    let payload = req.body;

    await employeeValidate(payload);
    
    await employeeService.addEmployee(payload);
    res.status(200).send(`Employee ${payload.empl_id} added`);
  } catch (error) {
    handleError(res, error);
  }
});

/**
 * @route   DELETE /api/empl/{id}
 * @desc    Removes an employee by id
 * @access  Public
 */
router.delete('/:empl_id', async (req, res) => {

  try {
    let empl_id = req.params.empl_id;
    
    await employeeService.deleteEmployee(empl_id);
    res.status(200).send(`Employee ${empl_id} deleted`);
  } catch (error) {
    handleError(res, error);
  }
});

/**
 * @route   Get /api/empl/getAll
 * @desc    Returns all employee details
 * @access  Public
 */
router.get('/getAll', async (req, res) => {
  try {
    let allEmployees = await employeeService.getAllEmployees();
    res.status(200).json(allEmployees);
  } catch (error) {
    handleError(res, error);
  }
});

/**
 * @route   POST /api/empl/link
 * @desc    Links an employee with a supervisor employee
 * @access  Public
 */
router.post('/link', async (req, res) => {
  try {
    let payload = req.body;
    let empl_id = payload.empl_id;
    let sup_id = payload.sup_id;

    await employeeService.linkEmployees(empl_id, sup_id);
    res.status(200).send(`Employees ${empl_id} and ${sup_id} linked successfully`);
  } catch (error) {
    handleError(res, error);
  }
});

module.exports = router;