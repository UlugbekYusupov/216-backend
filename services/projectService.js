const { v4: uuidv4 } = require("uuid");
const { projects } = require("../config/database");

exports.create = (title, description, deadline, status, ownerId) => {
  const project = {
    id: uuidv4(),
    title,
    description,
    deadline,
    status,
    ownerId,
    members: [],
  };
  projects.push(project);
  return { ...project };
};

exports.getAllProjects = () => {
  return projects;
};
