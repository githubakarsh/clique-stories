import React from "react";

import PropTypes from "prop-types";

import "./modal.css";

/** Primary UI component for user interaction */
export const Modal = ({}) => {
  let modal = document.getElementById("myModal");
  let span = document.getElementsByClassName("close")[0];

  const onClickOpenModal = () => {
    document.getElementById("myModal").style.display = "block";
  };

  const closeModal = () => {
    document.getElementById("myModal").style.display = "none";
  };

  window.onClick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  return (
    <div>
      <button id="myBtn" onClick={() => onClickOpenModal()}>
        Open Modal
      </button>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => closeModal()}>
            &times;
          </span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  /** Is this the principal call to action on the page? */
  onClick: PropTypes.func,
};
