import './accordion.scss';
import { useState } from 'react'; 
import DownloadLink from '../downloadLink/DownloadLink';


const accordionStubData = [
    {
      title: 'Eligible Job Holder',
      content: <div>
          <p>dfnvksnfksjndfsdjfksndkfnksdkjfksdnfkjsndk</p>
          <ul>
              <li>fbvjsvfhjbfhbvjbfvkbdjbvdbfjbvdbfhjvbdjfbvjhdbfjbvjdbfjbvdbvbfjbvjbdfbvdfbbvdhbvdfbvkdbf</li>
              <li>bdjvsbhvbjfbvjhdfbjvbdjhbvjdbfjvbjdbfjvbdjfbjvdbjfbvjdhfbjvbdjhf</li>
              <li>dbckjshgfhksjdhkfsdhfskdhfkhsdkhfksjdhfkhskdhfkhsdkfhksdhfkhskdhfk</li>
          </ul>

          <DownloadLink />
      </div>
    },
    {
      title: 'Section 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'Section 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];

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


const AccordionComponent = () => {
    return <>
    {accordionStubData.map(({title, content}) => {
        return <Accordion content={content} title={title}/>
    })}
  </>
}

export default AccordionComponent;