require('dotenv').config();
const path = require('path')
const express = require('express');

const server = express();
server.use(express.json());
server.use(express.static(path.join(__dirname, 'client/build')));

server.get('/api', (req, res) => {
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

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`listening on port ${PORT} ...`);
});