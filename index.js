const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const PORT = 4444 || process.env.PORT;

const students = require('./routers/students');
const cohorts = require('./routers/cohorts');

const middleware = [
  helmet(),
  cors(),
  express.json(),
];

const server = express();
server.use(middleware);

// server.get('/', async (req, res) => {
//   res.json({ message: 'API is working' });
// });

// server.get('/api', async (req, res) => {
//   const data = await db.get();
//   res.json(data);
// });

// server.get('/api/:id', async (req, res) => {
//   const data = await db.get(req.params.id);
//   res.json(data);
// });

// server.post('/api/test', async (req, res) => {
//   try {
//     const post = await db.add(req.body);
//     res.status(201).json(post);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json(error);
//   }
// });

// server.put('/api/test/:id', async (req, res) => {
//   try {
//     const put = await db.update(req.params.id, req.body);
//     res.json(put);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// server.delete('/api/test/:id', async (req, res) => {
//   try {
//     const record = await db.remove(req.params.id);
//     res.json(record);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

server.use('/api/students', students);
server.use('/api/cohorts', cohorts);

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
