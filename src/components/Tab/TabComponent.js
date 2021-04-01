import { useState } from 'react';
import './tab.scss';

const tab1 = <div>Tab 1 Content</div>;
const tab2 = <div>Tab 2 Content</div>;
const tab3 = <div>Tab 3 Content</div>;

const tabsList = [
    'Tab 1', 'Tab 2', 'Tab 3'
]
const TabComponent = ({
    namer
}) => {
    const [activeTab, setActiveTab] = useState(0);    

    const tabComponent = (id) => ({
        0: tab1,
        1: tab2,
        2: tab3
    })[id];

  return (
    <div>
      <div>
        <ul>
          {tabsList.map((item, index) => {
              return <li onClick={() => setActiveTab(index)}>{item}</li>
          })}
        </ul>
      </div>
      <div>
           {tabComponent(activeTab)}
      </div>
    </div>
  );
};

export default TabComponent;
