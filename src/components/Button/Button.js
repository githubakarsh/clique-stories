import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ variant, size, buttonName, iconLeft, iconRight, ...props }) => {
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
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xswide', 'swide' ]),
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'exdark']),
  buttonName: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
};

Button.defaultProps = {
  buttonName: 'Button Name',
  onClick: () => {alert('button clicked')},
  size: 'md',
  variant: 'light',
  iconLeft: false,
  iconRight: false,
};
