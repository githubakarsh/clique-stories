import React from 'react';
import "./datebirth.scss";
import { useState, createRef } from "react";

const DateOfBirth = () => {
  const dayRef = createRef();
  const monthRef = createRef();
  const yearRef = createRef();

  const [dob, setDob] = useState({ day: "", month: "", year: "" });

  const changeDay = (e) => {
      if(e.target.value.length === 2) {
        monthRef.current.focus();
      }
      setDob({...dob, [e.target.id]: e.target.value})
  };

  const changeMonth = (e) => {
    if(e.target.value.length === 2) {
        yearRef.current.focus();
      }
      setDob({...dob, [e.target.id]: e.target.value})
  }

  const changeYear = (e) => {
    
  };

  return (
    <div className="date-of-birth">
      <input
        ref={dayRef}
        className="dob-day"
        value={dob.day}
        id={"day"}
        onChange={(e) => changeDay(e)}
      />
      <input
        ref={monthRef}
        className="dob-month"
        value={dob.month}
        id={"month"}
        onChange={(e) => changeMonth(e)}
      />
      <input
        ref={yearRef}
        className="dob-year"
        value={dob.year}
        id={"year"}
        onChange={(e) => changeYear(e)}
      />
    </div>
  );
};

export default DateOfBirth;
