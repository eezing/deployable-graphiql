import React from 'react';
import PropTypes from 'prop-types';
import GraphiQL from 'graphiql';
import Modal from './Modal';
import EnvSettingsEdit from './EnvSettingsEdit';

class ToolbarSettingsBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  render() {
    return (
      <span>
        <Modal
          label="Env Settings"
          onClose={this.closeModal}
          isOpen={this.state.modalOpen}>
          <EnvSettingsEdit env={this.props.env} onClose={this.closeModal} />
        </Modal>
        <GraphiQL.Button
          onClick={this.openModal}
          label="Settings"
          title="Settings"
        />
      </span>
    );
  }
}

ToolbarSettingsBtn.propTypes = {
  env: PropTypes.string.isRequired
};

export default ToolbarSettingsBtn;
