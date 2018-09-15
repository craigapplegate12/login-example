const memoryStore =[{
    "id": 1,
    "firstName": "Jon",
    "email": "jon@gmail.com",
    "password": "0000"
},
{
    "id": 2,
    "firstName": "Sarah",
    "email": "sarah@gmail.com",
    "password": "1111"
},
{
    "id": 3,
    "firstName": "Tayte",
    "email": "tayte@gmail.com",
    "password": "2222"
}]

function authenticateUser(email, password){
    const user = memoryStore.find(user => user.email === email);
    if(!user) return null;
    if(user.password === password) return user.id;
    return null;
}

function findById(id){
    const user = memoryStore.find(user => Number(user.id) === Number(id));
    if (!user) return null;
    return user;
}
module.exports= {
    authenticateUser,
    findById
}