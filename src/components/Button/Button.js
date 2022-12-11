import PropTypes from 'prop-types';
import { LoadButton } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <LoadButton type="button" onClick={onClick}>Load more</LoadButton>
  );
};

Button.propTypes = {
  onclick: PropTypes.func,
};
