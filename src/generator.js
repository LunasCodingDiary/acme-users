// const faker = require('faker');
// const randomUsers = []
// while(randomUsers.length < 50){
//     randomUsers.push(faker.helpers.userCard())
// }
// module.exports= randomUsers

//should be in the format of a function

const faker = require('faker');
const generator =()=>{
    let users = [];
    while(users.length < 50){
    users.push(faker.helpers.userCard())
}
return users
}

module.exports = generator //a function


// question: do we write 'const userList = document.querySelector('#user-list');'here?