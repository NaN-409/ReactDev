import React, { useState } from "react";
import "./main.css";

const Main = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState(" ");
  return (
    <div className="main">
      <form>
        <input
          className="firstInput"
          placeholder="First name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="secondInput"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </form>
      <button
        className="btn"
        onClick={() => {
          setFullName(name +" "+lastName);
        }} 
      >
        Click
      </button>
      <p className="result">{fullName}</p>
    </div>
  );
};

export default Main;
