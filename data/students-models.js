const db = require('./models')('students');

const getStudent = id => {
  return db.cb(db => {
    return db('students')
      .join('cohorts', 'cohorts.id', 'students.cohort_id')
      .select('students.id', 'students.name as name', 'cohorts.name as cohort')
      .where('students.id', id)
      .first();
  });
}

module.exports = {
  ...db,
  getStudent,
};
