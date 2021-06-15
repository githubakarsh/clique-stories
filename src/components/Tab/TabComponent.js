import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './tab.scss';

const tab1 = <div>Tab 1 Content</div>;
const tab2 = <div>Tab 2 Content</div>;
const tab3 = <div>Tab 3 Content</div>;

const tabsList = [
    'Tab 1', 'Tab 2', 'Tab 3'
]
const TabComponent = ({
    namer,
    tabNames
}) => {
    const [activeTab, setActiveTab] = useState(0);    
    
    const tabComponent = (id) => ({
        0: tab1,
        1: tab2,
        2: tab3
    })[id];
    
  return (
      
    <div className="tab-main">
      <div className="tabbers-main">
        <nav className="tab-nav">
        <ul>
          {tabNames.map((item, index) => {
              return <li onClick={() => setActiveTab(index)}>{item}</li>
          })}
        </ul>
        </nav>
      </div>
      <div className="tab-content-container">
           {tabComponent(activeTab)}
      </div>
    </div>
  );
};

TabComponent.propTypes = {

}

TabComponent.defaultProps = {
    tabNames: tabsList,
}



export default TabComponent;
