const form = document.getElementById('userform');
const userList = document.getElementById('userlist');

const API_URL = '/api/users';

async function fetchUser() {
    const res = await fetch(API_URL);
    const users =await res.json();

    console.log('users from API:', users);


    userList.innerHTML = " ";
    users.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = `${user.name} - (${user.email} - ${user.contact})
        <button onclick="deleteUser(${user.id})">Delete</button>`;
        userList.appendChild(li);    
    });
}

form.addEventListener('submit',async(e)=>{
    e.preventDefault();

    const user = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        contact: document.getElementById('contact').value
    }; 

    await fetch(API_URL , {
        method:'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify(user)
    });
    form.reset();
    fetchUser();
});

async function deleteUser(id){
    await fetch(`/api/users/${id}`,{
        method:'DELETE'
    });

    fetchUser();
}

fetchUser();