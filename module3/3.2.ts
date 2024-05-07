{
    // oop - inheritance


    class Person {

        name: string;
        age: number;
        address: string;
        constructor(name: string, age: number, address: string){
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numOfHours: number){
            console.log(`${name} will sleep for ${numOfHours}`)
         }
    }
    
    class Student extends Person {
        constructor(name: string, age: number, address: string){
           super(name, age, address);
        }
        
    }

    const student = new Student('Muntasir', 12, 'Sylhet');
    

    class Teacher extends Person {
        designation: string;

        constructor(name: string, age: number, address: string, designation: string){
            super(name, age, address);
            this.designation = designation;
        }
        // method

         takeClass(numOfClass: number) {

         }
    }

   const teacher = new Teacher('Muntasir', 30, 'Sylhet', 'Head');
   
   

}