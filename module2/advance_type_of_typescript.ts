{
    // 2.1
    // type assertion 
    // Type assertion is a technique that informs the compiler about the type of a variable. You can use type assertion to specify a value’s type and tell the compiler not to deduce(onuman kora) it.
    let anything: any;
    anything = "Next level web development";
    anything = 123;
    // anything as number
    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value);
            return `The converted value is: ${convertedValue}`;
        }

        if (typeof value === 'number') {
            return value * 1000;
        }
    }
    // here informs the compiler about the type
    const resultKgToGm1 = kgToGm(1000) as number;
    const resultKgToGm2 = kgToGm('1000') as string;

    type CustomError = {
        message: string
    }

    try {

    } catch (error) {
        console.log((error as CustomError).message);
    }

    // 2.2
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

    // 2.3
    // generic type


    // type GenericArray = Array<boolean>;
    // type GenericArray<param> = Array<param>;
    type GenericArray<T> = Array<T>;


    // const rollNumbers: number[] = [3, 6, 8];
    const rollNumbers: GenericArray<number> = [3, 6, 8];

    // const mentors: string[] = ['x', 'y', 'z'];
    const mentors: GenericArray<string> = ['x', 'y', 'z'];

    // const boolArray : boolean[] = [true, false, true];
    const boolArray: GenericArray<boolean> = [true, false, true];

    const user: GenericArray<{ name: string, age: number }> = [
        {
            name: 'Muntasir',
            age: 20
        },
        {
            name: 'Sakif',
            age: 10
        }
    ]


    // generic tuple
    type genericTuple<x, y> = [x, y];

    const manush: genericTuple<string, string> = ['MR.X', 'Mr.Y'];

    const UserWithId: genericTuple<number, { name: string, email: string }> = [1234, { name: 'Muntasir', email: 'a@a.com' }];


    // 2.4
    // generic interface
    interface Developer<T, x = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        },
        smartWatch: T;
        bike?: x;
    }

    type emilabWatch = {
        brand: string;
        model: string
    }
    //   Developer<T, x = null>
    const poorDeveloper: Developer<emilabWatch> = {
        name: 'Muntasir',
        computer: {
            brand: 'asus',
            model: '12',
            releaseYear: 12
        },
        smartWatch: {
            brand: 'casio',
            model: 'y-77'
        }
    }

    interface appleWatch {
        brand: string;
        model: string;
        sleepTrack: boolean;
    }

    interface yamahaBike {
        model: string;
        manufacture: string
    }
    // Developer<T, x = null>
    const richDeveloper: Developer<appleWatch, yamahaBike> = {
        name: 'Sakif',
        computer: {
            brand: 'Sp',
            model: '1245',
            releaseYear: 2022
        },
        smartWatch: {
            brand: 'apollo',
            model: 'y-77',
            sleepTrack: true
        },
        bike: {
            model: 'Yamaha',
            manufacture: 'BD',

        }
    }


    // 2.5
    // function with generic
    const createArray = (param: string): string[] => {
        return [param];
    };

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    };

    const res1 = createArray('Bangladesh');
    const resGeneric = createArrayWithGeneric<string>('Bangladesh');

    type User = { id: number, name: string }
    const resGenericObj = createArrayWithGeneric<User>({
        id: 222,
        name: 'Muntasir',
    })

    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    };

    const res10 = createArrayWithTuple<string, number>('Bangladesh', 123);
    const res11 = createArrayWithTuple<string, { name: string }>('Bangladesh', { name: 'Asia' });

    // type User = {id: number, name:string}
    const addCourseToStudent = <T>(student: T) => {
        const course = 'Next level web development';
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({ name: 'Muntasir', email: 'a@g.com' });
    const student2 = addCourseToStudent({ name: 'Sakif', email: 'b@g.com' });

    // 2.6

    // constraints (kunu kichi enforce kora)
    // Constraints allow you to specify that a generic type parameter must meet certain criteria
    const addCourseToStudent1 = <T extends { id: number; name: string; email: string }>(student: T) => {
        const course = 'Next level web development';

        return {
            ...student,
            course
        }
    }


    const student11 = addCourseToStudent1(
        {
            id: 111,
            name: 'Muntasir',
            email: 'a@g.com'
        }
    );
    const student12 = addCourseToStudent1<{
        id: number;
        name: string;
        email: string;
    }>(
        {
            id: 222,
            name: 'Sakif',
            email: 'b@g.com'
        }

    );



    // 2.7
    //generic constraint with keyof operator 
    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    type Owner = "bike" | "car" | "ship"; //manually
    type Owner2 = keyof Vehicle;  // vehicle er key gulu union er mto kore ache("bike" | "car" | "ship")

    const getProperty = <x, y extends keyof x>(obj: x, key: y) => {
        // y er modhe x er key gula ase
        return obj[key];
    }

    const user7 = {
        name: 'Muntasir',
        age: 26,
        address: 'Sylhet',
    }

    getProperty(user7, 'name');

    //   2.8

    //promise

    type ToDO = {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }

    const getToDo = async (): Promise<ToDO> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
        return data;
    };

    getToDo();

    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => { //using Promise here

            const data: string = 'something';

            if (data) {
                resolve(data);
            } else {
                reject('failed to load data');
            }
        })

    }

    //  calling create promise function
    const showData = async (): Promise<string> => {
        const data: string = await createPromise();
        return data;
        // console.log(data);
    }

    showData();

    //  promise in object

    type Something = { something: string };

    const createPromise1 = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => { //using Promise here

            const data: Something = { something: 'something' };

            if (data) {
                resolve(data);
            } else {
                reject('failed to load data');
            }
        })

    }

    //  calling create promise function
    const showData1 = async (): Promise<Something> => {
        const data1: Something = await createPromise1();
        return data1;
        // console.log(data);
    }

    showData();
//  2.9
  // conditional type

  type a1 = number;
  type b1 = string;

  type x = a1 extends null ? true: false; // conditional type

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any; //nested conditional

  type Sheikh = {
      bike: string;
      car: string;
      ship:string;
  }

  type CheckVehicle<T> = T extends  keyof Sheikh ? true : false; 
  type hasBike = CheckVehicle<'bike'>;
  


}