const express = require('express');

const db = require('../data/students-models');
const validateBody = require('../middleware/validateBody');

const router = express.Router();
router.use(express.json());

// GET
router.get('/', async (req, res) => {
  const students = await db.get();
  res.json(students);
});

// POST
router.post('/', validateBody(['name', 'cohort_id']), async (req, res) => {
  const student = await db.add(req.body);
  res.json(student);
});

// PUT

// DELETE

module.exports = router;
