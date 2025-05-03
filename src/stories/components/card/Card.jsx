import React from 'react';

import PropTypes from 'prop-types';


/** Primary UI component for user interaction */
export const Card = ({
  title,
  footer,
  children, 
  ...props
}) => {
  return <div {...props}>
    {title && <div>{title}</div>}
    <div>{children}</div>
    {footer && <div>{footer}</div>}
  </div>;
};

Card.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** What background color to use */
  /** How large should the button be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Button contents */
  title: PropTypes.string,
  /** Optional click handler */
  onClick: PropTypes.func,
};
