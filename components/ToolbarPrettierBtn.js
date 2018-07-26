import React from 'react';
import PropTypes from 'prop-types';
import GraphiQL from 'graphiql';
import prettier from 'prettier/standalone';
import prettierGraphql from 'prettier/parser-graphql';

const ToolbarHistoryBtn = ({ graphiqlRef }) => {
  function _onClick() {
    const editor = graphiqlRef.current.getQueryEditor();
    editor.setValue(
      prettier.format(editor.getValue(), {
        parser: 'graphql',
        plugins: [prettierGraphql]
      })
    );
  }

  return (
    <GraphiQL.Button onClick={_onClick} label="Prettier" title="Prettier" />
  );
};

ToolbarHistoryBtn.propTypes = {
  graphiqlRef: PropTypes.object.isRequired
};

export default ToolbarHistoryBtn;
