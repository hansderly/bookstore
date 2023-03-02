import React from 'react';
import Proptypes from 'prop-types';

const Button = ({ onClick, children }) => (
  <button onClick={onClick} type="submit">
    {children}
  </button>
);

Button.propTypes = {
  onClick: Proptypes.func.isRequired,
  children: Proptypes.node.isRequired,
};

export default Button;
