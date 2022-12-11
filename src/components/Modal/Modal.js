import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalBox } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEsc);
  }

  handleEsc = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const {
      image: { largeImageURL, tags },
    } = this.props;
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalBox>
          <img src={largeImageURL} alt={tags} />
        </ModalBox>
      </Backdrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  image: PropTypes.object.isRequired,
};
