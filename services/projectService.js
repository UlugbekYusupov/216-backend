const { v4: uuidv4 } = require("uuid");
const { projects, users } = require("../config/database");

exports.create = (title, description, deadline, status, ownerId) => {
  const user = users.find((user) => user.id === ownerId);
  const project = {
    id: uuidv4(),
    title,
    description,
    deadline,
    status,
    ownerId,
    members: [],
  };
  user.ownedProjects.push(project);
  return { ...project };
};

exports.getAllProjects = () => {
  return users.ownedProjects;
};

exports.getProjectById = (id) => {
  const user = users.find((user) => user.id === ownerId);
  const project = user.ownedProjects.find((project) => project.id === id);
  if (!project) {
    throw Error("Project not found !");
  }
  return { ...project };
};

exports.deleteProject = (id) => {
  const user = users.find((user) => user.id === ownerId);
  const index = user.ownedProjects.findIndex((project) => project.id === id);
  if (index === -1) {
    throw Error("Project not found !");
  }
  user.ownedProjects.splice(index, 1);
  return true;
};
