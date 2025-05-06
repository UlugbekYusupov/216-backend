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
