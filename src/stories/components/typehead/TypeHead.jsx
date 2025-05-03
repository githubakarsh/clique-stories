import React from 'react';

import PropTypes from 'prop-types';

import './typehead.css';

/** Primary UI component for user interaction */
export const TypeHead = ({
}) => {

  const onSearch = () => {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
  };
  return <div>
    <input type="text" id="myInput" onKeyUp={() => onSearch()} placeholder="Search for names.." title="Type in a name"/>

<ul id="myUL">
  <li><a href="#">Mark</a></li>
  <li><a href="#">Scott</a></li>

  <li><a href="#">Billy</a></li>
  <li><a href="#">Bob</a></li>

  <li><a href="#">Calvin</a></li>
  <li><a href="#">Christina</a></li>
  <li><a href="#">Cindy</a></li>
</ul>
  </div>;
};

TypeHead.propTypes = {
  /** Is this the principal call to action on the page? */
};
