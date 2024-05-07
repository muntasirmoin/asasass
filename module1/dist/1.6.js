"use strict";
// learning function
// normal function
// arrow function
function add(num1, num2) {
    return num1 + num2;
}
const addtwo = (num1, num2) => num1 + num2;
// object --> function --> method
const poorUser = {
    name: "Muntasir",
    balance: 0,
    addBalance(balance) {
        return `My new balance is: ${this.balance + balance}`;
    },
};
const arr = [1, 4, 10];
const newArray = arr.map((elem) => elem * elem);
