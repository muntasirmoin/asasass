// learning function
// normal function
// arrow function

function add(num1: number, num2: number): number {
    return num1 + num2;
}


const addtwo = (num1: number, num2: number): number => num1 + num2 ;


// object --> function --> method
const poorUser = {
    name: "Muntasir",
    balance: 0,
    addBalance(balance: number): string {
        return `My new balance is: ${this.balance + balance}`;
    },
}


const arr: number[] = [1, 4, 10]

const newArray : number[] = arr.map((elem : number): number => elem * elem)