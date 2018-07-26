import React from 'react';
import PropTypes from 'prop-types';
import GraphiQL from 'graphiql';
import EnvMenuItem from './EnvMenuItem';

const ToolbarEnvironmentSelect = ({ list }) => {
  return (
    <GraphiQL.Menu label="Environment" title="Select Environment">
      {list.map(item => <EnvMenuItem key={item} name={item} />)}
    </GraphiQL.Menu>
  );
};

ToolbarEnvironmentSelect.propTypes = {
  list: PropTypes.array.isRequired
};

export default ToolbarEnvironmentSelect;
