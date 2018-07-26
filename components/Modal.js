import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, isOpen, label, onClose } = this.props;

    return (
      <ReactModal
        isOpen={isOpen}
        contentLabel={label}
        onRequestClose={onClose}
        shouldCloseOnOverlayClick={false}
        ariaHideApp={false}>
        <div ref={node => (this.cardRef = node)}>{children}</div>
        <style jsx global>{`
          .ReactModal__Overlay {
            z-index: 1050;
          }
        `}</style>
      </ReactModal>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Modal;
