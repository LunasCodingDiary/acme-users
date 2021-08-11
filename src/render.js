const renderer = ({userList, users}) => {
    const _idx = parseInt(window.location.hash.slice(1));
    const html = users.map((user,idx)=>{
        return `<li><a href='#${idx}'>${user.name}</a>
        ${_idx === idx ? `<div>${user['email']}</div>`: ''} 
        </li>`}).join('');
    userList.innerHTML = html
};

module.exports= renderer

//question: line 1 -- why {variable}