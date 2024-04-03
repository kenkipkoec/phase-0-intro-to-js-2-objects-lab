// Write your solution in this file!

// index.js

// Placeholder for employee data
let employee = {
    name: "John",
    age: 30,
    role: "Developer"
};

// Function to update employee with the given key and value (non-destructive)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}

// Function to update `employee` with the given `key` and `value` (destructive) and return the entire updated employee
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function to delete `key` from a clone of employee and return the new employee (non-destructive)
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function to delete key/value pair from the employee object (destructive)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};
