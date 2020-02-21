const express = require("express");
const projectsRouter = require("./projects/projectsRouter.js")
const resourcesRouter = require("./resources/resourcesRouter.js")

const server= express();

server.use(express.json())
server.use("/api/projects", projectsRouter)
server.use("/api/resources", resourcesRouter)

const port = process.env.PORT || 5000;

server.listen(port, ()=>{
    console.log(`Server running on port ${port}.`)
})