import React from 'react';
import './backnext.scss';
import { Button } from '../../Button/Button';

const BackNextButton = ({
    onClickBack,
    onClickNext
}) => {
    return <div className="back-next-button-container">
        <Button  buttonName="back" onClick={(e) => onClickBack(e)} />
        <Button variant="exdark" buttonName="Next" onClick={(e) => onClickNext(e)}/>
    </div>
}

export default BackNextButton;
