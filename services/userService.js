const { v4: uuidv4 } = require("uuid");
const { users } = require("../config/database");

exports.register = (username, email, password) => {
  const foundUser = users.find((user) => user.username === username);
  if (foundUser) {
    throw Error("Username already taken!");
  }
  const user = {
    id: uuidv4(),
    username,
    email,
    password,
  };
  users.push(user);
  return { ...user };
};

exports.login = (email, password) => {
  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );
  return foundUser;
};

exports.getAllUsers = () => {
  return users;
};

exports.getUserById = (id) => {
  const user = users.find((user) => user.id === id);
  if (!user) {
    throw Error("Username already taken!");
  }
  return { ...user };
};
