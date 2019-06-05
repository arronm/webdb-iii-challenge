
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', students => {
    students.increments();
    students.string('name', 128)
      .notNullable();
    students.integer('cohort_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('cohorts')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cohorts');
};
