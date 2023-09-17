const Joi = require('joi');

const nameMessages = {
    "string.base": "Name must be a string",
    "string.empty": "Name is required",
    "string.min": "Name must be at least {#limit} characters",
    "string.max": "Name must not exceed {#limit} characters",
    "any.required": "Name is not valid",
};

const emailMessages = {
    "string.base": "Email must be a string",
    "string.empty": "Email is required",
    "string.email": "Invalid email format",
    "any.required": "Email is required",
};

const ageMessages = {
    "number.base": "Age must be a number",
    "number.empty": "Age is required",
    "number.integer": "Age must be an integer",
    "number.min": "Age must be at least {#limit}",
    "number.max": "Age must not exceed {#limit}",
};

const phoneMessages = {
    "string.base": "Phone must be a string",
    "string.empty": "Phone is required",
    "string.min": "Phone must be at least {#limit} characters",
    "string.max": "Phone must not exceed {#limit} characters",
    "any.required": "Phone is required",
};

const genderMessages = {
    "string.base": "Gender must be a string",
    "string.empty": "Gender is required",
    "string.min": "Gender must be at least {#limit} characters",
    "string.max": "Gender must not exceed {#limit} characters",
    "any.required": "Gender is required",
};

const departmentMessages = {
    "string.base": "Department must be a string",
    "string.empty": "Department is required",
    "string.min": "Department must be at least {#limit} characters",
    "string.max": "Department must not exceed {#limit} characters",
    "any.required": "Department is required",
};

const userSchema = Joi.object({
    name: Joi.string().required().messages(nameMessages),
    email: Joi.string().email().required().messages(emailMessages),
    age: Joi.number().min(18).max(100).required().messages(ageMessages),
    phone: Joi.string().min(6).max(12).required().messages(phoneMessages),
    gender: Joi.string().required().messages(genderMessages),
    department: Joi.string().required().messages(departmentMessages),
});

function validateUser(userResponse) {
    return userSchema.validate(userResponse);
}

module.exports = { validateUser };