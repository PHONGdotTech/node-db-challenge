const db = require('../data/dbConfig.js');

module.exports = {
    getLiterallyAllTasks,
    getTasks,
    addTask
}

function getLiterallyAllTasks(){
    return db('Tasks')
        .join('Projects', 'Tasks.project_id','=','Projects.id' )
        .select('Tasks.*', 'Projects.name as project_name','Projects.description as project_description')
}

function getTasks(id){
    return db('Tasks')
        .select('id', 'description', 'notes', 'completed')
        .where({project_id: id})
}

function addTask(newTask){
    return db('Tasks').insert(newTask, "id")
}