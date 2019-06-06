const express = require('express');

const db = require('../data/students-models');
const validateBody = require('../middleware/validateBody');
const validateId = require('../middleware/validateId');

const router = express.Router();
router.use(express.json());

// GET
router.get('/', validateId(db), async (req, res) => {
  const students = await db.get();
  res.json(students);
});

router.get('/:id', validateId(db), async (req, res) => {

});

// POST
router.post('/', validateBody(['name', 'cohort_id']), async (req, res) => {
  const student = await db.add(req.body);
  res.json(student);
});

// PUT
router.put('/:id', validateId(db), async (req, res) => {

});

// DELETE
router.delete('/:id', validateId(db), async (req, res) => {

});

module.exports = router;
