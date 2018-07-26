'use strict';

const { buildSchema, graphql } = require('graphql');
const gql = s => `${s}`;

const schema = buildSchema(
  gql`
    type Query {
      hello: String!
    }
  `,
  { commentDescriptions: true }
);

const rootValue = {
  hello: () => 'world'
};

async function execute(query, variableValues, operationName, contextValue) {
  return graphql(
    schema,
    query,
    rootValue,
    contextValue,
    variableValues,
    operationName
  );
}

module.exports = execute;
