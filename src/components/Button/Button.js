import React from 'react';
import Proptypes from 'prop-types';

const style = {
  padding: '10px 40px',
  border: '0',
  color: '#fff',
  cursor: 'pointer',
};

const Button = ({ onClick, btnType, children }) => {
  const conditionalStyle = {
    backgroundColor: btnType === 'primary' ? '#0290ff' : 'transparent',
    color: btnType === 'primary' ? '#fff' : '#0290ff',
  };
  return (
    <button style={{ ...style, ...conditionalStyle }} onClick={onClick} type="submit">
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: Proptypes.func.isRequired,
  btnType: Proptypes.string.isRequired,
  children: Proptypes.node.isRequired,
};

export default Button;
