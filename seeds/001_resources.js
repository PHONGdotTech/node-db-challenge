
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Resources').insert([
        {name: 'Computer Lab', description: "The computer lab. It is located on the second floor on the northeast corner of the building. From the stairs, take a right. From the elevators, take a left."},
        {name: 'Conference Room 1', description: "A conference room for holding meetings. It is located on the ground floor on the northeast corner of the building, just to the right of the elevators."},
        {name: 'Library'},
        {name: 'Accounting Department'}
      ]);
    });
};
