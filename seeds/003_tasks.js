
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Tasks').insert([
        {description: 'Buy computers', notes: 'Are Dell computers still good?', project_id:1},
        {description: 'Install computers', notes: 'before the next school year', project_id:1},
        {description: 'make posters', notes: 'theme is back end web development', project_id:3},
        {description: 'hang posters', project_id:3}
      ]);
    });
};
