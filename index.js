// index.js
// import the joi library
const joi = require('joi');

// create the schema with validation rules and constrains
const userSchema = joi.object({
    userName: joi.string().alphanum().min(6).max(10).required(),
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] }}),
    age: joi.number().min(18).max(50),
    dateOfBirth: joi.date().required()
});

// define the data object to be validated
let myData = {
    userName: "JohnSmith", 
    email: 'john.smith@email.com',
    age: 20,
    dateOfBirth: '12-06-2000'  
}

// validate the data object and get the validation result
let valResult = userSchema.validate(myData);

// display the validation results
console.log(valResult)
