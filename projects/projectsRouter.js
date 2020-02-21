const express = require("express");
const Projects = require("./projectsDB.js")
const Tasks = require("../tasks/tasksDB.js")
const Resources = require("../resources/resourcesDB.js")
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

router.get('/:id', (req,res) => {
    Projects.getProject(req.params.id)
        .then(project => {
            Tasks.getTasks(req.params.id)
                .then(tasks => {
                    Resources.getResources(req.params.id)
                        .then(resources => {
                            res.status(200).json({
                                ...project,
                                tasks: tasks,
                                resources: resources
                            })
                        })
                })
        })
        .catch(err => {
            res.status(500).json({error: "Could not get that project."})
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
        .catch(err => {
            res.status(500).json({error: "Could not add project."})
        })
})

module.exports = router;