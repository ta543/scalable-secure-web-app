const User = require('../models/user');

let users = [
  new User(1, 'UserOne', 'userone@example.com'),
  new User(2, 'UserTwo', 'usertwo@example.com'),
];

const getUserById = (id) => {
  return users.find(user => user.id === id);
};

const createUser = (userData) => {
  const newUser = new User(
    Math.max(...users.map(user => user.id)) + 1,
    userData.username,
    userData.email,
  );
  users.push(newUser);
  return newUser;
};

const updateUserById = (id, updateData) => {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) return null;

  const updatedUser = users[userIndex];
  if (updateData.username) updatedUser.username = updateData.username;
  if (updateData.email) updatedUser.email = updateData.email;

  users[userIndex] = updatedUser;
  return updatedUser;
};

const deleteUserById = (id) => {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) return false;

  users = users.filter(user => user.id !== id);
  return true;
};

module.exports = {
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
