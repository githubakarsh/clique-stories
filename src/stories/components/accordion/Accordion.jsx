import React from 'react';
import './accordion.css';

export const Accordion = () => {
  const openAccordion = () => {
    let acc = document.getElementsByClassName("accordion");
    let i;
    for (i = 0; i < acc.length; i++) {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
    }
  };
  return (
    <section>
      <h2>Accordion</h2>

      <button className="accordion" onClick={() => openAccordion()}>
        Section 1
      </button>
      <div className="panel">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <button className="accordion">Section 2</button>
      <div className="panel">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <button className="accordion">Section 3</button>
      <div className="panel">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>
  );
};
