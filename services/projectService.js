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

exports.getProjectById = (id) => {
  const project = projects.find((project) => project.id === id);
  if (!project) {
    throw Error("Project not found !");
  }
  return { ...project };
};

exports.deleteProject = (id) => {
  const index = projects.findIndex((project) => project.id === id);
  if (index === -1) {
    throw Error("Project not found !");
  }
  projects.splice(index, 1);
  return true;
};
