import React from 'react';

import './accordion.scss';
import { useState } from 'react'; 

const Accordion = ({title, content}) => {
    const [isActive, setIsActive] = useState(false);
    return <div className="accordion">
    <div className="accordion-item">
      <div className="accordion-title"
          onClick={() => setIsActive(!isActive)}
      >
        <div><span className="accordion-title-heading">{title}</span></div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive &&<div className="accordion-content">{content}</div>}
    </div>
  </div>
}


const AccordionComponent = ({data}) => {
    return <>
    {data?.map(({title, content}) => {
        return <Accordion content={content} title={title}/>
    })}
  </>
}



export default AccordionComponent;