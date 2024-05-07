{

// object destructing
// array destructing

// object destructing

const user = {
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
    name: {
        middleName
    } 
} = user;

// array destructing

const myFriends = ['Rahim', 'Karim', 'Amin', 'Alamin', 'Kuddus'];

const [, , bestFirend, ...reamingFriends] = myFriends;
// console.log(bestFirend);




}