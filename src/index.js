//console.log(users)
//console.log(list)

//put the data in the html
//const list = users.map(user=>`<li><a href='#${users.indexOf(user)}'>${user.name}</a></li>`).join('')
//const useList = document.querySelector('#user-list');
//useList.innerHTML=list

//get the idx and change the look when you click


const generator= require('./generator')
const users = generator();
// const faker = require('faker');
// const users = []
// while(users.length < 50){
//     users.push(faker.helpers.userCard())
// }

const userList = document.querySelector('#user-list');    
const renderer = require('./render')
// const renderer = ({userList, users}) => {
//     const _idx = parseInt(window.location.hash.slice(1));
//     const html = users.map((user,idx)=>{
//         return `<li><a href='#${idx}'>${user.name}</a>
//         ${_idx === idx ? `<div>${user['email']}</div>`: ''} 
//         </li>`}).join('');
//     userList.innerHTML = html
// };

const render = () => {
    renderer({userList, users})
}

window.addEventListener('hashchange', render);  //why not() {}

render();

