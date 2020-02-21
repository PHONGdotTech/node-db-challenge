const express = require("express");
const Projects = require("./projectsDB.js")
const router = express.Router()

router.get('/', (req,res) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json({error: "Could not get projects."})
        })
})

router.post('/', (req,res) => {
    Projects.addProject(req.body)
        .then(id => {
            res.status(201).json({
                message: "Successfully added a new project.",
                newProject: {
                    id: id[0],
                    name: "",
                    description: null,
                    completed: false,
                     ...req.body
                    }
            })
        })
})

module.exports = router;