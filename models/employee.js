//These are our schema files for entering info
//employee schema

// ID
// first name
// last name
// address
// email
// phone
// access level (employee, admin)  represent as digits, 0 = admin?

//user access levels:
// 0 : root user/admin
// 1: employee
// 2: athlete
// 3: public

// ADD ALL THESE TO OUR SCHEMA (OR WHATEVER OF THE ABOVE WE NEED!)

const mongoose = require('mongoose'); // Import Mongoose Package
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema; // Assign Mongoose Schema function to variable
// var titlize = require('mongoose-title-case'); // Import Mongoose Title Case Plugin
const validate = require('mongoose-validator'); // Import Mongoose Validator Plugin

//Validation functions pre-database
// Name Validator (first and last) Do we need to worry about dashes?
const nameValidator = [
    validate({
        validator: 'matches',
        // arguments: /^(([a-zA-Z]{2,20})+[ ]+([a-zA-Z]{3,20})+)+$/,
        arguments: /^(([a-zA-Z]{2,20}))+$/,
        message: 'Name must be at least 2 characters, max 30, no special characters or numbers.'
    }),
    validate({
        validator: 'isLength',
        arguments: [2, 20],
        message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
    })
];

// User Mongoose Schema
// Employee Schema
const employeeSchema = new Schema({
    firstname: { type: String, required: true, validate: nameValidator},
    lastname: { type: String, required: true, validate: nameValidator},
    //username: { type: String, lowercase: false, required: true, unique: true},
    password: { type: String, required: true, select: false , validate: passwordValidator},
    email: { type: String, required: true, lowercase: true, unique: true},
    //active: { type: Boolean, required: true, default: false },
    //temporarytoken: { type: String, required: true },
    //resettoken: { type: String, required: false },
    //permission: { type: String, required: true, default: 'public' }, //access level
    //phone: { type: String, required: false, validate: phoneValidator}, //need to create Validator
});