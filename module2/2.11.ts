{

    // utility type
    // pick utility

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string
    }

    type NameAge = Pick<Person, 'name' | 'age'>;

    // omit utility  [omit mean bad dewa]

    type contactNo = Omit<Person, 'name' | 'age'>;

    // require utility
    type PersonRequired = Required<Person>;

    // partial utility [shob gula value ke optional kore dibe]

    type PersonPartial = Partial<Person>;

    // readonly utility
    type PersonReadOnly = Readonly<Person>;

    const person1: PersonReadOnly = {
        name: 'X',
        age: 24,
        contactNo: '017...'
    }

    //  record utility


    // const EmptyObj : {} = {};

    const EmptyObj : Record<string, unknown> = {}


    // type MyObj = {
    //     a: string;
    //     b: string;
    // }

    
    // key er nam string hobe and key er value string hobe
    
    type MyObj = Record<string, string>;

  const obj1: MyObj = {
    a: 'aa',
    b: 'bb',
    c: 'cc'
  }

}