{

    // type alias

    type Student = {
        name: string,
        age: number,
        gender: string,
        contactNo?: string,
        address: string
    }

    const student1: Student = {
        name: 'Amir',
        age: 10,
        gender: 'Male',
        contactNo :'017896',
        address: 'Sylhet'
    }

    const student2: Student  = {
        name: 'Arib',
        age: 12,
        gender: 'Male',
        
        address: 'Dhaka'
    }

 type Add = (num1: number, num2: number) => number;

 const add: Add = (num1, num2) => num1 + num2;
//  console.log(add(1,2))



}