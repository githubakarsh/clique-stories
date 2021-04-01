import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ variant, size, buttonName, ...props }) => {
  const mode = variant ? `storybook-button--${variant}` : 'storybook-button--info';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      {...props}
    >
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  buttonName: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  buttonName: 'Button Name',
  onClick: () => {alert('button clicked')},
  size: 'md',
  variant: 'light'
};
