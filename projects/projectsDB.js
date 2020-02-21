const db = require('../data/dbConfig.js');

module.exports = {
    getProjects,
    getProject,
    addProject
}

function getProjects(){
    return db('Projects')
}

function getProject(id){
    return db('Projects').where('Projects.id', id).first()
}

function addProject(newProject){
    return db('Projects').insert(newProject, "id")
}