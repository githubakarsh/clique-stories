import React from 'react';

import PropTypes from 'prop-types';

import './tabs.css';

/** Primary UI component for user interaction */
export const Tabs = ({
  primary = false,
  backgroundColor = null,
  size = 'medium',
  label,
  ...props
}) => {

  const onClickTabs = (e, cityName) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  };
 return <section>

<div class="tab">
  <button class="tablinks" onClick={(e) => onClickTabs(e, 'London')}>London</button>
  <button class="tablinks" onClick={(e) => onClickTabs(e, 'Paris')}>Paris</button>
  <button class="tablinks" onClick={(e) => onClickTabs(e, 'Tokyo')}>Tokyo</button>
</div>

<div id="London" className="tabcontent">
  <h3>London</h3>
  <p>London is the capital city of England.</p>
</div>

<div id="Paris" className="tabcontent">
  <h3>Paris</h3>
  <p>Paris is the capital of France.</p> 
</div>

<div id="Tokyo" className="tabcontent">
  <h3>Tokyo</h3>
  <p>Tokyo is the capital of Japan.</p>
</div>
 </section>
};

Tabs.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** How large should the button be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
};
