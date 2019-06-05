
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', cohorts => {
    cohorts.increments();
    cohorts.string('name', 128)
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cohorts');
};
