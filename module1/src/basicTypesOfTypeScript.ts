{
    // 1.4
    // basic data type


    let firstName: string = "Muntasir";  // string
    let roll: number = 123;               // number
    let isAdmin: boolean = true;          // boolean
    let x: undefined = undefined;        // undefined
    let y: null = null;                    // null
    // array
    let friends: string[] = ['muntasir', 'Moin'];
    let rollList: number[] = [1, 2];
    // tuple like array --> order array --> type of values
    let coordinates: [number, number] = [1, 5];
    let nameAge: [number, string] = [50, 'Muntasir'];

    // 1.5
    // reference type --> object
    const user: {
        company: 'Programming Hero'; // literal type [when any value work like a type]
        firstName: string;
        middleName?: string; //optional type
        lastName: string;
        isMarried: boolean;
    } = {
        company: 'Programming Hero',
        firstName: "Muntasir",
        lastName: "Moin",
        isMarried: true,
    }

    //1.6
    //function

    //normal Function
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }

    // arrow Function
    const addtwo = (num1: number, num2: number): number => num1 + num2;

    // object --> function --> method
    const poorUser = {
        name: "Muntasir",
        balance: 0,
        addBalance(balance: number): string {
            return `My new balance is: ${this.balance + balance}`;
        },
    }

    //1.7
    // learn spread operator in array
    const bros1: string[] = ['Amir', 'Alif', 'Karim'];
    const bros2: string[] = ['Kuddus', 'Rakib', 'Amin'];
    bros1.push(...bros2);
    // spread operator in object
    const mentor1 = {
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    }

    const mentor2 = {
        prisma: 'Firoz',
        next: 'Tanmoy',
        cloud: 'Nakib'
    }

    const mentorList = {
        ...mentor1,
        ...mentor2
    }

    // learn rest operator
    // const greetFriends = (friend1: string, friend2: string, friend3: string) => {
    //     console.log(`Hi ${friend1} ${friend2} ${friend3}`);
    // }
    const greetFriends = (...friends: string[]) => {

        friends.forEach((friend: string) => console.log(`Hi ${friends}`));
    }
    greetFriends('Amir', 'Alif', 'Karim');

    // 1.8
    // object destructing
    const user1 = {
        id: 345,
        name: {
            firstName: 'Muntasir',
            middleName: 'Moin',
            lastName: 'Chowdhury'
        },
        contactNo: '0174500000',
        address: 'Sylhet',
    }

    const {
        contactNo,
        name: { middleName }
    } = user1;

    // array destructing
    const myFriends = ['Rahim', 'Karim', 'Amin', 'Alamin', 'Kuddus'];
    const [, , bestFirend, ...reamingFriends] = myFriends;
    console.log(bestFirend);

    //1.9
    // type alias [ekta nirdishto structure ke ekta type hisehbe declare kore reuse (bar bar bebohra) kora ]
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
        contactNo: '017896',
        address: 'Sylhet'
    }

    const student2: Student = {
        name: 'Arib',
        age: 12,
        gender: 'Male',

        address: 'Dhaka'
    }

    type Add = (num1: number, num2: number) => number;
    const add1: Add = (num1, num2) => num1 + num2;

    // 1.10
    // Union types similar to or || (|)
    type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper';
    type FullstackDeveloper = 'frontEndDeveloper' | 'expertDeveloper';
    type developer = FullstackDeveloper | FrontendDeveloper;
    const newDeveloper: FrontendDeveloper = 'juniorDeveloper';

    type user = {
        name: string;
        email?: string;
        gender: 'male' | 'female';
        bloodGroup: 'O+' | 'A+' | 'A-';
    }
    const user2: user = {
        name: 'Muntasir',
        gender: 'male',
        bloodGroup: 'A+'
    }
    // intersection types similar to and && (&)
    type frontendDeveloper = {
        skills: string[];
        designation1: 'frontend Developer'
    }
    type backendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer'
    }
    type fullstackDeveloper = frontendDeveloper & backendDeveloper;

    const full_stackDeveloper: fullstackDeveloper = {
        skills: ['html', 'css', 'express'],
        designation1: 'frontend Developer',
        designation2: 'Backend Developer'

    }


    //1.11
    // ternary operator 
    const age: number = 19;
    const isAdult = age >= 18 ? 'adult' : 'not adult';

    // nullish coalescing operator [null/undefined er decision making er jonno bebohar kora hoy]
    const isAuthenticated = undefined;
    const result = isAuthenticated ?? 'Guest';
    console.log(result);
    const isnull = null;
    const result1 = isnull ?? 'null value';
    console.log(result1);

    // optional chaining
    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string //optional chaining
        }
    }

    const user3: User = {
        name: "Muntasir",
        address: {
            city: 'sylhet',
            road: '14,Munshipara',
            presentAddress: 'Sylhet',

        }
    }

    const permanentAddress = user3?.address?.permanentAddress ?? 'no permanetAddress';
    console.log({ permanentAddress });

    // 1.12

    // nullable types
    const searchName = (value: string | null) => {
        if (value) {
            console.log('searching');
        } else {
            console.log('there is nothing to searching');
        }
    }
    searchName(null)

    // unknown typeof
    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const convertSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertSpeed} ms^-1`);
        }
        else if (typeof value === 'string') {
            const [result, unit] = value.split(' ');
            const convertSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertSpeed} ms^-1`);
        }
        else {
            console.log('wrong Input')
        }
    }
    getSpeedInMeterPerSecond('1000 kmh^-1');

    // never
    const throwError = (msg: string): never => {
        throw new Error(msg);
    }
    throwError('here is an error');



}