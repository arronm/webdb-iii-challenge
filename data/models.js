const knex = require('knex');
const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

module.exports = table => ({
  get: get(table),
});

const get = table => () => {
  return db(table);
}
