
import React from 'react';
import './downloadlink.scss';
import { PropTypes } from 'prop-types';

const DownloadLink = ({
    hrefVal,
    linkName,
    target,
    onClick
}) => {
    return <div class="container"><a className="button-link" 
    href={hrefVal ? hrefVal : '#'}
    onClick={(e) => onClick(e)} 
    target={target}>
        <b>{linkName}</b>
    </a></div>
}

DownloadLink.propTypes = {
    linkName: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    onClick: PropTypes.func,
}

DownloadLink.defaultProps = {
    href : "https://www.google.co.in",
    linkName: "Download your voucher here",
    //onClick: alert("clicked link")
}

export default DownloadLink;
