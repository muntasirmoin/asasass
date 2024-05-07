"use strict";
{
    // learn spread operator
    // learn rest operator
    // learn spread operator
    const bros1 = ['Amir', 'Alif', 'Karim'];
    const bros2 = ['Kuddus', 'Rakib', 'Amin'];
    bros1.push(...bros2);
    // 
    const mentor1 = {
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    };
    const mentor2 = {
        prisma: 'Firoz',
        next: 'Tanmoy',
        cloud: 'Nakib'
    };
    const mentorList = Object.assign(Object.assign({}, mentor1), mentor2);
    // learn rest operator
    // const greetFriends = (friend1: string, friend2: string, friend3: string) => {
    //     console.log(`Hi ${friend1} ${friend2} ${friend3}`);
    // }
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friends}`));
    };
    greetFriends('Amir', 'Alif', 'Karim');
}
