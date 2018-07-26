import React from 'react';
import PropTypes from 'prop-types';
import GraphiQL from 'graphiql';

const ToolbarHistoryBtn = ({ graphiqlRef }) => {
  function _onClick() {
    graphiqlRef.current.handleToggleHistory();
  }

  return <GraphiQL.Button onClick={_onClick} label="History" title="History" />;
};

ToolbarHistoryBtn.propTypes = {
  graphiqlRef: PropTypes.object.isRequired
};

export default ToolbarHistoryBtn;
