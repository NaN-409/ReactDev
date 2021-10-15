import React, { useState } from "react";
import Modal from "react-modal";
import "./modul.css";

function Modul() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [accessNumber,setAccessNumber] = useState("")
  const [number,setNumber] = useState("");

  return (
    <div className="modal">
      <div className="navbar">
        <button className="navLogo">Logo</button>
        <button className="navBtn" onClick={() => setModalIsOpen(true)}>
          Open modal
        </button>
      </div>
      <Modal
        className="mainModal"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className="inModal">
          <p></p>
          <h2>Kirish</h2>
          <p className="closeBtn" onClick={() => setModalIsOpen(false)}>
            X
          </p>
        </div>
        <div className="inModalForm">
          <form className="modalForm">
            <p>Telefon raqam</p>
            <input type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
             className="modalInput" 
             placeholder="+998 ( )" />
          </form>
        </div>
        <div className="inModalForm">
          <form className="modalForm">
            <p>Parol</p>
            <input type="password"
             className="modalInput" 
              />
          </form>
        <div className="mainCheckbox">
          <input type="checkbox" 
          className="checkbox"
          />
          <p>Eslab qolish</p>
        </div>
        <div className="warning">Parolni kiriting kamida 8ta belgi</div>
        <div className="enterBtn">
          <button className="btn"
          onClick={() => {setAccessNumber(number)}}
          >Kirish</button>
          <span className="createParol">Parolni tiklash</span>
          <span className="register">Ro`yhatdan o`tish</span>
          <p>{accessNumber}</p>
        </div>
        </div>
      </Modal>
    </div>
  );
}

export default Modul;
