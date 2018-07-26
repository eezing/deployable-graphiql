import React from 'react';
import PropTypes from 'prop-types';
import GraphiQL from 'graphiql';

const EnvMenuItem = ({ name }) => {
  function _onClick() {
    const search = window.location.search.replace(/env=[^&]+/, `env=${name}`);
    window.location.search = search;
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
