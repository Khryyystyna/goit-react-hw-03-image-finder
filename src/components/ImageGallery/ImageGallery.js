import PropTypes from 'prop-types';
import { GalleryCont } from './ImageGallery.styled';

export const ImageGallery = ({ children }) => {
  return <GalleryCont>{children}</GalleryCont>;
};

ImageGallery.propTypes = {
  children: PropTypes.node.isRequired,
};
