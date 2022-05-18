const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const EmployeeSchema = new Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    leviathanId: {
      type: Number,
    },
    email: {
      type: String,
    },
    telephone: {
         type: String,
         required: true
    },
    role: {
        type: String
    }
});
   
module.exports = Employee = mongoose.model("Employee", EmployeeSchema);