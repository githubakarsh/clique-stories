import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineArrowRight } from "react-icons/ai";
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
      {iconLeft && <span className='button-icon'><b><AiOutlineArrowRight /></b></span>}
      {buttonName}
      {iconRight && <span className='button-icon'><b><AiOutlineArrowRight /></b></span>}
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
