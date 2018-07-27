import React from 'react';
import PropTypes from 'prop-types';
import GraphiQL from 'graphiql';
import { setEnvParam } from '../../utils/env-search-param';

const EnvMenuItem = ({ name }) => {
  function _onClick() {
    setEnvParam(name);
  }

  return (
    <GraphiQL.MenuItem
      label={name}
      title={`${name} environment`}
      onSelect={_onClick}
    />
  );
};

EnvMenuItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default EnvMenuItem;
