{
    // generic type

    // type GenericArray = Array<boolean>;
    // type GenericArray<param> = Array<param>;
    type GenericArray<T> = Array<T>;


    // const rollNumbers: number[] = [3, 6, 8];
    const rollNumbers: GenericArray<number> = [3, 6, 8];

    // const mentors: string[] = ['x', 'y', 'z'];
    const mentors: GenericArray<string> = ['x', 'y', 'z'];

    // const boolArray : boolean[] = [true, false, true];
    const boolArray : GenericArray<boolean> = [true, false, true];

    const user: GenericArray<{name: string, age: number}> = [
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
    type genericTuple<x,y> = [x,y];

    const manush : genericTuple<string, string> = ['MR.X', 'Mr.Y'];

    const UserWithId : genericTuple<number, {name:string, email: string}> = [1234, {name: 'Muntasir', email: 'a@a.com'}];

}