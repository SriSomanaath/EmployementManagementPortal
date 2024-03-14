const mongoose = require('mongoose');

// Define Mongoose schema
const employeeSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    role: { type: String },
    minTimeInHours: { type: Number },
    maxTimeInHours: { type: Number },
    slackEmail: { type: String }
});

// Define Mongoose model
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = { Employee };
