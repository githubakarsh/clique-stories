import React from 'react';

import PropTypes from 'prop-types';

import './dropdown.css';

/** Primary UI component for user interaction */
export const Dropdown = ({
}) => {

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  const onClickDropdown = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  };
  return <div className="dropdown">
  <button onClick={() => onClickDropdown()} className="dropbtn">Dropdown</button>
  <div id="myDropdown" className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>  
};

Dropdown.propTypes = {
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
