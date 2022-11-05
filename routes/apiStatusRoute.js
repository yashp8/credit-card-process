const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send(`Running: Environment:${process.env.NODE_ENV}`);
});

module.exports = app;
