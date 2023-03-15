import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Gallery } from './styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ items }) => {
  return (
    <Gallery>
      {items.map(item => (
        <ImageGalleryItem
          key={item.id}
          smallImage={item.webformatURL}
          largeImage={item.largeImageURL}
        />
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
