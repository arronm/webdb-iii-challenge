
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').truncate()
    .then(() => {
      // Inserts seed entries
      return knex('cohorts').insert([
        {name: 'Web 16'},
        {name: 'Web 18'},
        {name: 'Web 19'}
      ]);
    });
};
