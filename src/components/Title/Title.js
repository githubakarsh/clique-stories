import { createElement } from 'react';
import './title.scss';

import PropTypes from 'prop-types';

const Title = ({
    size,
    children
}) => {
    return createElement(size, {className: 'title-main'}, children)
}

Title.defaultProps = {
    size: 'h1',
    children: 'Title here'
}

export default Title;
