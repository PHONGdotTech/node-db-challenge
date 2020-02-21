const db = require('../data/dbConfig.js');

module.exports = {
    getLiterallyAllTasks,
    addTask
}

function getLiterallyAllTasks(){
    return db('Tasks')
        .join('Projects', 'Projects.id', 'Tasks.project_id')
        .select('Tasks.*','Projects.name','Projects.description')
}

function addTask(newTask){
    return db('Tasks').insert(newTask, "id")
}