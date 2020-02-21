const db = require('../data/dbConfig.js');

module.exports = {
    getResources,
    addResource
}

function getResources(){
    return db('Resources')
}

function addResource(newResource){
    return db('Resources').insert(newResource, "id")
}