import React from 'react';

import PropTypes from 'prop-types';

import './snackbar.css';

/** Primary UI component for user interaction */
export const Snackbar = ({
}) => {
    const showSnackbar = () => {
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    };
  return (
    <>
    <button onClick={() => showSnackbar()}>Show Snackbar</button>
    <div id="snackbar">Some text some message..</div>
    </>
    
  );
};

Snackbar.propTypes = {
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
