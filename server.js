const express = require("express");
const server = express();
const port = 3000;
const userRoute = require("./routes/userRoute");
const projectRoute = require("./routes/projectRoute");

const cors = require("cors");

server.get("/", (req, res) => {
  res.send("bu server javob berganini anglatadi");
});

server.use(express.json());
server.use(cors());

server.use("/auth", userRoute);
server.use("/project", projectRoute);

server.listen(port, () => {
  console.log("Server is running on port " + port);
});
