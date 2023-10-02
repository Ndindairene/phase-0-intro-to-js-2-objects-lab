// Write your solution in this file!
let employee = {
    name: 'John',
    street:'11 beijing'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let updatedEmployee ={
        ...employee,[key]: value
    };
return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key,value) {
    let newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}