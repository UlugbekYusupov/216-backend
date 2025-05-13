const { v4: uuidv4 } = require("uuid");
const { users } = require("../config/database");
const jwt = require("jsonwebtoken");

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
    ownedProjects: [],
    participatedProjects: [],
  };
  users.push(user);
  return { ...user };
};

const secret_key = "pdp_secret_key";

exports.login = (email, password) => {
  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );
  if (!foundUser) {
    throw new Error("User not found!");
  }
  const token = jwt.sign({ email, password }, secret_key, { expiresIn: "1h" });
  return { token, foundUser };
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
