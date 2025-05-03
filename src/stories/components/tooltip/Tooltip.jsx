import React from 'react';

import PropTypes from 'prop-types';

import './tooltip.css';

/** Primary UI component for user interaction */
export const Tooltip = ({
 
}) => {
  return (
    <div className="tooltip">Hover over me
    <span className="tooltiptext">Tooltip text</span>
  </div>
  );
};

Tooltip.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** How large should the button be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
};
