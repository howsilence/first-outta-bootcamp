const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employeeController');


router.get('/employee/', employeeController.indexEmployees);
router.get('/employee/:id', employeeController.showEmployee)
router.post('/employee', employeeController.createEmployee);
router.patch('/employee/:id', employeeController.updateEmployee)
router.delete('/employee/:id', employeeController.destroyEmployee);



module.exports = router;