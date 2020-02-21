const express = require("express");
const projectsRouter = require("./projects/projectsRouter.js")

const server= express();

server.use(express.json())
server.use("/api/projects", projectsRouter)

const port = process.env.PORT || 5000;

server.listen(port, ()=>{
    console.log(`Server running on port ${port}.`)
})