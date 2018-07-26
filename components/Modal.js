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
          .ReactModal__Content {
            top: 1rem !important;
            bottom: 1rem !important;
            left: 1rem !important;
            right: 1rem !important;
          }
          @media screen and (min-width: 640px) {
            .ReactModal__Content {
              top: 2rem !important;
              left: 10% !important;
              right: 10% !important;
            }
          }
          @media screen and (min-width: 1024px) {
            .ReactModal__Content {
              left: 20% !important;
              right: 20% !important;
            }
          }
          @media screen and (min-height: 800px) {
            .ReactModal__Content {
              bottom: 25% !important;
            }
          }
          @media screen and (min-height: 1024px) {
            .ReactModal__Content {
              bottom: 35% !important;
            }
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
