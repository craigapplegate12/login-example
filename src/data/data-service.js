import users from './data.json';

export function authenticateUser(email,password){

  const user = users.find(user => user.email === email);
  if(!user) return null;
  if(user.password === password) return user.id;  
  return null;

}

export function findById(id) {
  return users.find(user => Number(user.id) === Number(id))
}