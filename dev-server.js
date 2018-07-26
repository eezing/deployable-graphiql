'use strict';

const PORT = process.env.PORT;
const express = require('express');
const bodyParser = require('body-parser');
const graphql = require('./dev-graphql');
const next = require('next');
const client = next({ dev: true });
const app = express();

client.prepare().then(() => {
  const clientHandler = client.getRequestHandler();

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
      res.status(500).send();
      console.error(error); //eslint-disable-line
    }
  });

  app.get('*', (req, res) => clientHandler(req, res));
});

const listener = app.listen(PORT, err => {
  if (err) throw err;
  //eslint-disable-next-line
  console.log('listening, port: %d', listener.address().port);
});
