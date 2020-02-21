const db = require('../data/dbConfig.js');

module.exports = {
    getLiterallyAllTasks,
    getTasks,
    addTask
}

function getLiterallyAllTasks(){
    return db('Tasks')
        .join('Projects', 'Projects.id', 'Tasks.project_id')
        .select('Tasks.*','Projects.name','Projects.description')
}

function getTasks(id){
    return db('Tasks')
        .select('id', 'description', 'notes', 'completed')
        .where({project_id: id})
}

function addTask(newTask){
    return db('Tasks').insert(newTask, "id")
}