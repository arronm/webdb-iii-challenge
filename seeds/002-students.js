
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {
          name: 'Arron',
          cohort_id: 3,
        },
        {
          name: 'Jamie',
          cohort_id: 1,
        },
        {
          name: 'Mindy',
          cohort_id: 2,
        },
        {
          name: 'Steve',
          cohort_id: 3,
        },
        {
          name: 'Dwayne',
          cohort_id: 2,
        }
      ]);
    });
};
