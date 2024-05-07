{
    // learn spread operator
    // learn rest operator

    // learn spread operator

const bros1: string[] = ['Amir', 'Alif', 'Karim'];
const bros2: string[] = ['Kuddus', 'Rakib', 'Amin'];

bros1.push(...bros2);


//  spread operator

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


}