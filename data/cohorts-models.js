// TODO: Fine tune the implementation pattern here
const db = require('./models.js')('cohorts');

const getStudents = (cohort_id) => {
  return db.cb(db => {
    return db('students')
      .join('cohorts', 'cohorts.id', 'students.cohort_id')
      .select('students.id', 'students.name as name', 'cohorts.name as cohort')
      .where('students.cohort_id', cohort_id);
  });
}

module.exports = {
  ...db,
  getStudents,
}