{
    // interface

    type User1 = {
        name: string;
        age: number;
    };
    //  example object declare using interface
    interface User2 {
        name: string;
        age: number;
    }
    //  type Alias moddhe object er property bararanor jonno ekhnae & use kora hoice.
    type UserWithRole1 = User1 & { role: string };
    //  interface er moddhe object er property bararanor jonno ekhnae extends use kora hoice.
    interface UserWithRole2 extends User2 {
        role: string
    }
    const user1: UserWithRole2 = {
        name: 'Muntasir',
        age: 24,
        role: 'Manager'
    }
    type rollNumber = number;
    type Roll1 = number[];
    //  example array declare using interface
    interface Roll2 {
        [index: number]: number
    }
    const rollNumber2: Roll2 = [1, 2, 3];
    //  example function declare using interface
    interface Add2 {
        (num1: number, num2: number): number;
    }
    const add: Add2 = (num1, num2) => num1 + num2;

}