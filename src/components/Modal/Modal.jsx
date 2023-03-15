import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, StyledModal } from './styled';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <StyledModal>{children}</StyledModal>
    </Overlay>,
    modalRoot
  );
}

// export class Modal extends Component {
// componentDidMount() {
//   window.addEventListener('keydown', this.handleKeyDown);
// }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

// handleKeyDown = e => {
//   if (e.code === 'Escape') {
//     this.props.onClose();
//   }
// };

// handleBackdropClick = e => {
//   if (e.currentTarget === e.target) {
//     this.props.onClose();
//   }
// };

//   render() {
// return createPortal(
//   <Overlay onClick={this.handleBackdropClick}>
//     <StyledModal>{this.props.children}</StyledModal>
//   </Overlay>,
//   modalRoot
// );
//   }
// }

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
