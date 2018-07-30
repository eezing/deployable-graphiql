'use strict';

const isDev = process.env.NODE_ENV === 'development';
const PORT = process.env.PORT;

const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');
const client = next({ dev: isDev });
const app = express();
const fetch = require('isomorphic-fetch');
const graphql = require('./dev-graphql');

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
      res.status(500).send(error);
    }
  });

  app.post('/proxy', async (req, res) => {
    const proxyReq = req.body;

    try {
      const result = await fetch(proxyReq.host + proxyReq.path, {
        method: 'post',
        headers: proxyReq.headers,
        body: JSON.stringify(proxyReq.body)
      });

      res.send(await result.json());
    } catch (error) {
      res.send(error);
    }
  });

  app.get('*', (req, res) => clientHandler(req, res));
});

const listener = app.listen(PORT, err => {
  if (err) throw err;
  //eslint-disable-next-line
  console.log('listening, port: %d', listener.address().port);
});
