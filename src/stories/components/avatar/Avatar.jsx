import React from 'react';

import PropTypes from 'prop-types';

import './avatar.css';

/** Primary UI component for user interaction */
export const Avatar = ({
  src
}) => {
  return <img src={src} alt="Avatar" className="avatar"></img>
};

Avatar.propTypes = {
  /** Is this the principal call to action on the page? */
};
