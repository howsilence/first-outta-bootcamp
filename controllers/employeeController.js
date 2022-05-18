const mongoose = require('mongoose');
const Employee = require('../models/employeeModel');


// GET All
const indexEmployees = function(req, res) {
    Employee.find({}, function(err, employee) {
      if (err)
        res.send(err);
      res.json(employee);
    });
  };

// GET One
  const showEmployee = function(req, res) {
    Employee.findById(req.params.id, function(err, employee) {
      if (err)
        res.send(err);
      res.json(employee);
    });
  };

// POST
const createEmployee = async function(req, res) {
    var new_employee = new Employee(req.body);
    new_employee.save(function(err, employee) {
      if (err)
        res.send(err);
      res.json(employee);
    });
  };

// PATCH
const updateEmployee = async function(req, res) {
    Employee.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, employee) {
      if (err)
        res.send(err);
      res.json(employee);
    });
  };

// DELETE
const destroyEmployee = async function(req, res) {
   Employee.deleteOne({_id: req.params.id}, function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Employee entry successfully deleted' });
    });
  };


module.exports.indexEmployees = indexEmployees;
module.exports.showEmployee = showEmployee;
module.exports.createEmployee = createEmployee;
module.exports.updateEmployee = updateEmployee;
module.exports.destroyEmployee = destroyEmployee;