const userService = require("../services/userService");

exports.register = (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "Please fill all required fields!" });
  }
  try {
    const user = userService.register(username, email, password);
    return res.status(201).json({ user, message: "Registered Successfully!" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please fill all required fields!" });
  }
  const foundUser = userService.login(email, password);

  if (!foundUser) {
    return res.status(404).json({ message: "Such user Not found!" });
  }
  return res.status(200).json({ message: "Successfully logged in" });
};

exports.getUsers = (req, res) => {
  try {
    const users = userService.getAllUsers();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getUser = (req, res) => {
  const { id } = req.params;
  try {
    const user = userService.getUserById(id);
    if (user) {
      return res.status(200).json(user);
    }
    return res.status(404).json({ messag: "User not found!" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
