import React from 'react';
import { withRouter } from 'next/router';
import Head from 'next/head';
import Graphiql from '../components/Graphiql';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ready: false };
  }

  componentDidMount() {
    this.setState({ ready: true });
  }

  static parseEnv(path) {
    try {
      return /(?:env=)([^&]+)/.exec(path)[1] || 'default';
    } catch (error) {
      return 'default';
    }
  }

  render() {
    // eslint-disable-next-line
    const env = IndexPage.parseEnv(this.props.router.asPath);

    return this.state.ready === true ? (
      <div className="page">
        <Head>
          <title>{window.location.host + ' - ' + env}</title>
        </Head>
        <Graphiql env={env} />
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
