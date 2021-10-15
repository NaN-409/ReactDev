import React, { useState } from "react";

const Card = () => {
  const [full_name, setFull_name] = useState("");
  const [name, setName] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [count, setCount] = useState(1);
  return (
    <>
      <div>
        <p>{count}</p>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setCount(count + 5);
          }}
        >
          +
        </button>
      </div>
      <div>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          value={first_name}
          onChange={(e) => {
            setFirst_name(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setFull_name("Ismi:  " + name + " Familyasi: " + first_name);
          }}
        >
          Saqlash
        </button>
        <p>{full_name}</p>
      </div>
    </>
  );
};

export default Card;
