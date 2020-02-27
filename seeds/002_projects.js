
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Projects').delete()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        {name: 'Install new computers in the Computer Lab.'},
        {name: 'Build a parking garage.', description: "Get it done."},
        {name: 'Make posters', description: "Student council wants posters."},
      ]);
    });
};
