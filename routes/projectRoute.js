const express = require("express");

const router = express.Router();
const projectController = require("../controllers/projectController");

router.post("/", projectController.createProject);
router.get("/", projectController.getProjects);
// router.get("/:id", projectController.getProject);
// router.delete("/:id", projectController.deleteProject);
// router.patch("/:id", projectController.updateProject);

module.exports = router;
