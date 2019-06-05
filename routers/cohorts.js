const express = require('express');

const router = express.Router();

const db = require('../data/cohorts-models');

router.get('/', async (req, res) => {
  const cohorts = await db.get();
  res.json(cohorts);
});

module.exports = router;