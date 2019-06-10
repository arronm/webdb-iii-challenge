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

server.use('/api/students', students);
server.use('/api/cohorts', cohorts);

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
