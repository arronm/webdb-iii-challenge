const express = require('express');

const router = express.Router();

const db = require('../data/cohorts-models');
const validateBody = require('../middleware/validateBody');
const validateId = require('../middleware/validateId');
const errorRef = require('../helpers/errorRef');

// GET
router.get('/', async (req, res) => {
  try {
    const cohorts = await db.get();
    res.json(cohorts);
  } catch (error) {
    res.status(500).json(errorRef(error));
  }
});

router.get('/:id', validateId(db), async (req, res) => {
  try {
    res.json(req.resource);
  } catch (error) {
    res.status(500).json(errorRef(error));
  }
});

router.get('/:id/students', validateId(db), async (req, res) => {
  try {
    const students = await db.getStudents(req.params.id);
    res.json(students);
  } catch (error) {
    res.status(500).json(errorRef(error));
  }
});

// POST
router.post('/', validateBody(['name']), async (req, res) => {
  try {
    const cohort = await db.add(req.body);
    res.json(cohort);
  } catch (error) {
    res.status(500).json(errorRef(error));
  }
});

// PUT
router.put('/:id', validateId(db), async (req, res) => {
  try {
    const cohort = await db.update(req.resource.id, {
      ...req.resource,
      ...req.body,
    });
    res.json(cohort);
  } catch (error) {
    res.status(500).json(errorRef(error));
  }
});

// DELETE
router.delete('/:id', validateId(db), async (req, res) => {
  try {
    const cohort = await db.remove(req.resource.id);
    res.json(cohort);
  } catch (error) {
    res.status(500).json(errorRef(error));
  }
});

module.exports = router;