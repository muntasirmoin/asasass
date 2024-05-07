{
    // type guards

    type alphaNumeric = string | number;
    // typeof guard

    const add = (param1: alphaNumeric, param2: alphaNumeric) => {
        if(typeof param1 === 'number' && typeof param2 === 'number'){
            return param1 + param2;
        }
        else{
            return param1.toString() + param2.toString();
        }
    }

    const result1 = add(1,2);
    console.log(result1);

    // type in guard
// in guard object er khetre use kora hoy
    type NormalUSer = {
        name: string
    }

    type AdminUser = {
        name: string;
        role: 'admin';
    }

    const getUser = (user: NormalUSer | AdminUser) => {
        // using in
        if('role' in user){
            console.log(`my name is ${user.name} & my role is ${user.role}`)
        }
        else{
            console.log(`my name is ${user.name}.`)
        }
    }

    const normalUser : NormalUSer = {
        name :'Sakif'
    }

    const adminUSer: AdminUser = {
        name: 'sakif',
        role: 'admin'
    }

    getUser(normalUser);
    getUser(adminUSer);

}