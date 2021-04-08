import './mobilekeypad.scss';
import { useState } from "react";

const MobileKeyPad = ({
    title
}) => {
    const listofItems = [1,2,3,4,5,6,7,8,9,'*',0,'#'];
    const [buttonValue, setButtonValue] = useState();


    return <div className="mobile-keypad">
        <div className="mobile-keypad-space">

        </div>
        <div className="mobile-keypad-main">
        {listofItems.map((item, index) => {
            return <button>{item}</button>
        })}
    </div>
    <div className="mobile-keypad-button">
        <button className="reset-button">Reset</button>
    </div>
    </div>
}

export default MobileKeyPad;
