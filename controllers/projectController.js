const projectService = require("../services/projectService");

exports.createProject = (req, res) => {
  const { title, description, deadline, status, ownerId } = req.body;
  if ((!title || !description || deadline, !status)) {
    return res
      .status(400)
      .json({ message: "Please fill all required fields!" });
  }
  try {
    const project = projectService.create(
      title,
      description,
      deadline,
      status,
      ownerId
    );
    return res.status(201).json({ project, message: "Project created!" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getProjects = (req, res) => {
  try {
    const projects = projectService.getAllProjects();
    return res.status(200).json(projects);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getProject = (req, res) => {
  const { id } = req.params;
  try {
    const project = projectService.getProjectById(id);
    if (project) {
      return res.status(200).json(project);
    }
    return res.status(404).json({ messag: "User not found!" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.deleteProject = (req, res) => {
  const { id } = req.params;

  try {
    const isDeleted = projectService.deleteProject(id);
    if (isDeleted) {
      return res.status(200).json({ message: "Project deleted successfully!" });
    }
    return res.status(400).json({ message: "Project deletion failed!" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
