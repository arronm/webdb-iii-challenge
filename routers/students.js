const express = require('express');

const db = require('../data/students-models');
const validateBody = require('../middleware/validateBody');
const validateNew = require('../middleware/validateNew');
const validateId = require('../middleware/validateId');
const errorRef = require('../helpers/errorRef');

const router = express.Router();
router.use(express.json());

// GET
router.get('/', validateId(db), async (req, res) => {
  try {
    const students = await db.get();
    res.json(students);
  } catch (error) {
    res.status(500).json(errorRef(error));
  }
});

router.get('/:id', validateId(db), async (req, res) => {
  try {
    const student = await db.getStudent(req.resource.id);
    res.json(student);
  } catch (error) {
    res.status(500).json(errorRef(error));
  }
});

// POST
router.post('/', validateNew({
  name: {
    type: 'string',
    required: true,
  },
  cohort_id: {
    type: 'number',
    required: true,
    exists: {
      database: require('../data/models'),
      table: 'cohorts',
      column: 'id',
    }
  }
}), async (req, res) => {
  try {
    const student = await db.add(req.body);
    res.json(student);
  } catch (error) {
    res.status(500).json(errorRef(error));
  }
});

// PUT
router.put('/:id', validateId(db), async (req, res) => {
  try {
    const student = await db.update(req.resource.id, {
      ...req.resource,
      ...req.body,
    });
    res.json(student);
  } catch (error) {
    res.status(500).json(errorRef(error));
  }
});

// DELETE
router.delete('/:id', validateId(db), async (req, res) => {
  try {
    const student = await db.remove(req.resource.id);
    res.json(student);
  } catch (error) {
    res.status(500).json(errorRef(error));
  }
});

module.exports = router;
