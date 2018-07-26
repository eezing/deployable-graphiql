import React from 'react';
import PropTypes from 'prop-types';
import GraphiQL from 'graphiql';

const EnvMenuItem = ({ name, onClick }) => {
  function _onClick() {
    onClick(name);
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
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default EnvMenuItem;
