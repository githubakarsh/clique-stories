import React from "react";

import "./alertnote.css";

export const AlertNote = () => {
  return (
    <>
    <div className="danger">
  <p><strong>Danger!</strong> Some text...</p>
</div>

<div className="success">
  <p><strong>Success!</strong> Some text...</p>
</div>

<div className="info">
  <p><strong>Info!</strong> Some text...</p>
</div>

<div className="warning">
  <p><strong>Warning!</strong> Some text...</p>
</div>    </>
  );
};
