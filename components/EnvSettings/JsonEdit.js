import React from 'react';
import PropTypes from 'prop-types';
import 'codemirror/theme/monokai.css';
import 'codemirror/addon/lint/lint.css';

class EnvJsonEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.nodeRef = React.createRef();
    this.getValue = this.getValue.bind(this);
  }

  componentDidMount() {
    const CodeMirror = require('codemirror');
    require('codemirror/mode/javascript/javascript');
    require('codemirror/addon/edit/matchbrackets');
    require('codemirror/addon/edit/closebrackets');
    require('codemirror/addon/lint/lint');
    require('../../utils/jsonlint');
    require('codemirror/keymap/sublime');

    const value = JSON.stringify(this.props.defaultValue || {}, null, 2);

    this.editor = CodeMirror(this.nodeRef.current, {
      value,
      mode: 'application/json',
      tabSize: 2,
      autoCloseBrackets: true,
      matchBrackets: true,
      showCursorWhenSelecting: true,
      theme: 'monokai',
      lineWrapping: true,
      lineNumbers: true,
      lint: true,
      gutters: ['CodeMirror-lint-markers'],
      keyMap: 'sublime'
    });
  }

  getValue() {
    return JSON.parse(this.editor.doc.getValue());
  }

  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <hr />
        <div ref={this.nodeRef} />
        <style jsx>{`
          h4 {
            font-family: monospace;
            margin-bottom: 0;
          }
        `}</style>
      </div>
    );
  }
}

EnvJsonEditor.propTypes = {
  title: PropTypes.string.isRequired,
  defaultValue: PropTypes.object
};

export default EnvJsonEditor;
