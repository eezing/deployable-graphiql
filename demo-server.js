'use strict';

const PORT = process.env.PORT;
const express = require('express');
const bodyParser = require('body-parser');
const graphql = require('./dev-graphql');
const app = express();

app.use(express.static(__dirname + '/out'));

app.use(bodyParser.json());

app.post('/graphql', async (req, res) => {
  try {
    const context = {};

    const result = await graphql(
      req.body.query,
      req.body.variables,
      req.body.operationName,
      context
    );

    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

const listener = app.listen(PORT, err => {
  if (err) throw err;
  //eslint-disable-next-line
  console.log('listening, port: %d', listener.address().port);
});
