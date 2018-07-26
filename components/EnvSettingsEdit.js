import React from 'react';
import PropTypes from 'prop-types';
import EnvJsonEditor from './EnvJsonEditor';
import EnvStore from '../utils/env-storage';

class EnvSettingsEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.nodeRef = React.createRef();
    this.state = { config: null };
    this.onSave = this.onSave.bind(this);
    this.headersRef = React.createRef();
  }

  componentDidMount() {
    const store = new EnvStore(this.props.env);
    this.setState({ config: store.getConfig() });
  }

  onSave() {
    const store = new EnvStore(this.props.env);
    store.setConfig({
      ...this.state.config,
      headers: this.headersRef.current.getValue()
    });
    this.props.onClose();
  }

  render() {
    return this.state.config !== null ? (
      <div>
        <div className="title-bar">
          <div className="title-container">
            <h3>{'Env Settings (' + this.props.env + ')'}</h3>
          </div>
          <div className="save-container">
            <button onClick={this.onSave}>Save</button>
            <button className="close-btn" onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
        <EnvJsonEditor
          ref={this.headersRef}
          title="Request Headers"
          defaultValue={this.state.config.headers}
        />
        <style jsx>{`
          h3 {
            font-family: monospace;
            margin-bottom: 0;
          }
          .title-bar {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
          }
          .title-container {
            display: inline-block;
          }
          .save-container {
            display: inline-block;
          }
          button {
            font-family: monospace;
            text-decoration: underline;
            cursor: pointer;
            color: #2d82bc;
            padding: 1em 0;
            border: none;
            font-size: 1.05em;
          }
          .close-btn {
            margin-left: 1em;
          }

          button:hover {
            color: #17496a;
          }
          button:active {
            color: #2d82bc;
          }
          button:focus {
            outline: none;
          }
        `}</style>
      </div>
    ) : null;
  }
}

EnvSettingsEdit.propTypes = {
  env: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

export default EnvSettingsEdit;
