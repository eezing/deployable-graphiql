const IS_PROXY = false;

import React from 'react';
import { withRouter } from 'next/router';
import Head from 'next/head';
import Graphiql from '../components/Graphiql';
import { getEnvParam } from '../utils/env-search-param';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { env: null };
  }

  componentDidMount() {
    this.setState({ env: getEnvParam() || 'default' });
  }

  render() {
    return this.state.env !== null ? (
      <div className="page">
        <Head>
          <title>{window.location.host + ' - ' + this.state.env}</title>
        </Head>
        <Graphiql env={this.state.env} isProxy={IS_PROXY} />
        <style jsx global>{`
          .page {
            height: 100vh;
          }
          body {
            height: 100%;
            margin: 0;
            width: 100%;
            overflow: hidden;
          }
        `}</style>
      </div>
    ) : null;
  }
}

export default withRouter(IndexPage);
