require('dotenv').config();
const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Deployment App'
  });
});

server.get('/api/users', (req, res) => {
  res.json([
    { id: 1, fName: 'ayden'},
    { id: 2, fName: 'abbie'},
    { id: 3, fName: 'zeke'},
  ]);
});

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`listening on port ${PORT} ...`)
});