import React from 'react';
import PropTypes from 'prop-types';
import GraphiQL from 'graphiql';
import EnvMenuItem from './EnvMenuItem';

const ToolbarEnvironmentSelect = ({ list, onSelect, onNew }) => {
  const current = list.shift();

  return (
    <GraphiQL.Menu label={current.name} title="Select Environment">
      {list.map(item => (
        <EnvMenuItem key={item.name} name={item.name} onClick={onSelect} />
      ))}
      <EnvMenuItem name="New Environment" onClick={onNew} />
    </GraphiQL.Menu>
  );
};

ToolbarEnvironmentSelect.propTypes = {
  list: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onNew: PropTypes.func.isRequired
};

export default ToolbarEnvironmentSelect;
