import React from 'react';
import './card.scss';
import { PropTypes } from 'prop-types';
const Card = ({
    cardTitle,
    children,
    cardFooter,
    size,
    variant
}) => {
    const sizeOfCard = (size && size!== 'xlg') && `card-main--${size}`;
    let variantOfCard;
    if(variant && variant !== 'default') {
        variantOfCard = `card-main--${variant}`;
    }
    return <div className={`card-main ${sizeOfCard} ${variantOfCard}`}>
        {cardTitle && <div className="card-title">
            <h2 >{cardTitle}</h2>
            </div>}
        <div className="card-content">{children}</div>
        {cardFooter && <div className="card-footer">{cardFooter}</div>}
    </div>
}

Card.defaultProps = {
    size : 'md',
    variant: 'default'
}

Card.propTypes = {
    size: PropTypes.oneOf(['xsm', 'sm', 'md', 'lg', 'xlg']),
    variant: PropTypes.oneOf(['default','primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'])
}

export default Card;
