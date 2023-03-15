import PropTypes from 'prop-types';
import { StyledButton } from './styled';

export const Button = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick} type="button">
      Load more
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
