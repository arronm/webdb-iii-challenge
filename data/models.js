const knex = require('knex');
const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

module.exports = table => ({
  add: add(table),
  get: get(table),
  // getStudents: getStudents(table),
  update: update(table),
  remove: remove(table),
  cb: cb(table),
  // ...methods,
});

const get = table => id => {
  if (!id) return db(table);
  return db(table).where({ id }).first();
}

// const getStudents = table => cohort_id => {
//   return db(table).where({ cohort_id });
// }

const cb = table => (method) => {
  return method(db);
}

const add = table => (data) => {
  return db(table)
    .insert(data)
    .then(ids => {
      return get(table)(ids[0]);
    });
}

const update = table => (id, data) => {
  return db(table)
    .where({ id })
    .update(data)
    .then(() => {
      return get(table)(id);
    });
}

const remove = table => async (id) => {
  const record = await get(table)(id);
  await db(table)
    .where({ id })
    .del();
  return record;
};
