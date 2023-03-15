import { useState } from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, Image, LargeImage } from './styled';
import { Modal } from 'components/Modal';

export function ImageGalleryItem({ smallImage, largeImage }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  return (
    <GalleryItem>
      <Image src={smallImage} onClick={toggleModal} />
      {showModal && (
        <Modal onClose={toggleModal}>
          <LargeImage src={largeImage} />
        </Modal>
      )}
    </GalleryItem>
  );
}

// export class ImageGalleryItem extends Component {
//   state = { showModal: false };

// toggleModal = () => {
//   this.setState(({ showModal }) => ({
//     showModal: !showModal,
//   }));
//   };

//   render() {
//     const { smallImage, largeImage } = this.props;
//     const { showModal } = this.state;

// return (
//   <GalleryItem>
//     <Image src={smallImage} onClick={this.toggleModal} />
//     {showModal && (
//       <Modal onClose={this.toggleModal}>
//         <LargeImage src={largeImage} />
//       </Modal>
//     )}
//   </GalleryItem>
// );
//   }
// }

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
};
