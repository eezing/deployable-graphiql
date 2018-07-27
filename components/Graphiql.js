import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import GraphiQL from 'graphiql';
import 'graphiql/graphiql.css';
import StorageWithPrefix from '../utils/storage-with-prefix';
import ToolbarHistoryBtn from './ToolbarHistoryBtn';
import ToolbarPrettierBtn from './ToolbarPrettierBtn';
import ToolbarSettingsBtn from './ToolbarSettingsBtn';
import ToolbarEnvironmentSelect from './ToolbarEnvironmentSelect';
import EnvStore from '../utils/env-storage';

class Graphiql extends React.Component {
  constructor(props) {
    super(props);

    this.fetcher = this.fetcher.bind(this);
    this.graphiqlRef = React.createRef();
    this.storage = new StorageWithPrefix(props.env);
    this.state = { ready: false, envList: [] };
  }

  componentDidMount() {
    const envStore = new EnvStore(this.props.env);

    if (envStore.getConfig() === null) {
      EnvStore.addEnv(this.props.env);
      envStore.setConfig({
        host: window.location.origin,
        path: '/graphql',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    this.setState({ ready: true, envList: EnvStore.listEnvs() });
  }

  async fetcher(graphQLParams) {
    const envStore = new EnvStore(this.props.env);
    const { host, path, headers } = envStore.getConfig();

    const res = await fetch(host + path, {
      method: 'post',
      headers,
      body: JSON.stringify(graphQLParams)
    });

    return res.json();
  }

  render() {
    return this.state.ready === true ? (
      <GraphiQL
        ref={this.graphiqlRef}
        fetcher={this.fetcher}
        storage={this.storage}>
        <GraphiQL.Logo>{this.props.env}</GraphiQL.Logo>
        <GraphiQL.Toolbar>
          <ToolbarHistoryBtn graphiqlRef={this.graphiqlRef} />
          <ToolbarPrettierBtn graphiqlRef={this.graphiqlRef} />
          <ToolbarSettingsBtn env={this.props.env} />
          <ToolbarEnvironmentSelect
            current={this.props.env}
            list={this.state.envList}
          />
        </GraphiQL.Toolbar>
      </GraphiQL>
    ) : null;
  }
}

Graphiql.propTypes = {
  host: PropTypes.string,
  path: PropTypes.string,
  env: PropTypes.string.isRequired
};

export default Graphiql;
