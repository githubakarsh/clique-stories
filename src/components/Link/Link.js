import './link.scss';

import { createElement } from 'react';
import PropTypes from 'prop-types';


const Link = ({
    children,
    href,
    variant,
    ...props
}) => {
    const cssClass = variant ? `link-main--${variant}` : 'link-main--light'
    return createElement('a', {className: `link-main ${cssClass}`, href:href, ...props}, children);
}

Link.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
}

export default Link;
