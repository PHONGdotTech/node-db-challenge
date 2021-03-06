const express = require("express");
const helmet = require("helmet");
const projectsRouter = require("./projects/projectsRouter.js")
const resourcesRouter = require("./resources/resourcesRouter.js")
const tasksRouter = require("./tasks/tasksRouter.js")

const server = express();

server.use(helmet())
server.use(express.json())

server.use("/api/projects", projectsRouter)
server.use("/api/resources", resourcesRouter)
server.use("/api/tasks", tasksRouter)

const port = process.env.PORT || 5000;

server.listen(port, ()=>{
    console.log(`Server running on port ${port}.`)
})