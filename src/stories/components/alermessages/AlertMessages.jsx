import React from "react";

import "./alertmessages.css";

export const AlertMessages = () => {
  const onCloseAlert = () => {
    let close = document.getElementsByClassName("closebtn");
    let i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        let div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function () {
          div.style.display = "none";
        }, 600);
      };
    }
  };

  return (
    <>
      <div className="alert">
        <span className="closebtn" onClick={() => onCloseAlert()}>
          &times;
        </span>
        <strong>Danger!</strong> Indicates a dangerous or potentially negative
        action.
      </div>

      <div className="alert success">
        <span className="closebtn" onClick={() => onCloseAlert()}>
          &times;
        </span>
        <strong>Success!</strong> Indicates a successful or positive action.
      </div>

      <div className="alert info">
        <span className="closebtn" onClick={() => onCloseAlert()}>
          &times;
        </span>
        <strong>Info!</strong> Indicates a neutral informative change or action.
      </div>

      <div className="alert warning">
        <span className="closebtn" onClick={() => onCloseAlert()}>
          &times;
        </span>
        <strong>Warning!</strong> Indicates a warning that might need attention.
      </div>
    </>
  );
};
