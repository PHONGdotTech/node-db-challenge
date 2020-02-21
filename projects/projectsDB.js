const db = require('../data/dbConfig.js');

module.exports = {
    getProjects,
    addProject
}

function getProjects(){
    return db('Projects')
}

function addProject(newProject){
    return db('Projects').insert(newProject, "id")
}