const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const PORT = 4444 || process.env.PORT;

const db = require('./data/models')('students');

const middleware = [
  helmet(),
  cors(),
  express(),
];

const server = express();
server.use(middleware);

server.get('/', async (req, res) => {
  res.json({ message: 'API is working' });
});

server.get('/api/', async (req, res) => {
  const data = await db.get();
  res.json(data);
})

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
