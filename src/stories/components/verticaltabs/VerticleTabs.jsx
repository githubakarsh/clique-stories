
import React from 'react';
import './verticletabs.css';

export const VerticleTabs = () => {

    const onClickOpenTabs = (e, cityName) => {
        let i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
      
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
      
        // Show the current tab, and add an "active" class to the link that opened the tab
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    };
    return <section><div class="tab">
    <button class="tablinks" onClick={(e) => onClickOpenTabs(e, 'London')}>London</button>
    <button class="tablinks" onClick={(e) => onClickOpenTabs(e, 'Paris')} >Paris</button>
    <button class="tablinks" onClick={(e) => onClickOpenTabs(e, 'Tokyo')}>Tokyo</button>
  </div>
  
  <div id="London" class="tabcontent">
    <h3>London</h3>
    <p>London is the capital city of England.</p>
  </div>
  
  <div id="Paris" class="tabcontent">
    <h3>Paris</h3>
    <p>Paris is the capital of France.</p>
  </div>
  
  <div id="Tokyo" class="tabcontent">
    <h3>Tokyo</h3>
    <p>Tokyo is the capital of Japan.</p>
  </div></section>;
};

