import PropTypes from 'prop-types';
import './snackbar.scss';
import React, { createElement} from 'react';


const Snackbar = ({
    children,
    variant
}) => {
    const cssClass = variant ? `snackbar-main--${variant}`:"snackbar-main--light";
    return createElement('p', {className: `snackbar-main ${cssClass}`}, children);
}

Snackbar.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'])
}

export default Snackbar;
