const express = require('express');

const router = express.Router();

const db = require('../data/cohorts-models');
const studentsDB = require('../data/students-models');
const validateBody = require('../middleware/validateBody');
const validateId = require('../middleware/validateId');

// GET
router.get('/', async (req, res) => {
  const cohorts = await db.get();
  res.json(cohorts);
});

router.get('/:id', validateId(db), async (req, res) => {
  res.json(req.resource);
});

router.get('/:id/students', validateId(db), async (req, res) => {
  const students = await db.getStudents(req.params.id);
  res.json(students);
});

// POST
router.post('/', validateBody(['name']), async (req, res) => {
  const cohort = await db.add(req.body);
  res.json(cohort);
});

// PUT
router.put('/:id', validateId(db), async (req, res) => {
  const cohort = await db.update(req.resource.id, {
    ...req.resource,
    ...req.body,
  });
  res.json(cohort);
});

module.exports = router;