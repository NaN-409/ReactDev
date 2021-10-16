import React, { useState } from "react";
import Modal from "react-modal";
import "./modul.css";

function Modul() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [accessNumber, setAccessNumber] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const p = "123456789";
  const nurbek = "5555";
  const kamol = "4444";
  const shahboz = "3333";
  const nothing = "";
  const border = 13;

  const [accept, setAccept] = useState("");

  const onSubmit = () => {
    if (accept === nurbek) {
      setAccept("Nurbekni nomeri");
    } else {
      setAccept("Bunday nomer mavjud emas");
    }
    if (accept === kamol) {
      setAccept("kamolni nomeri");
    }
    if (accept === shahboz) {
      setAccept("Shahbozni nomeri");
    }
    if (accept === nothing) {
      setAccept("Nomerni to'liq kiriting");
    }
    if (nothing >= border) {
      setAccept("Siz haddan tashqari ko`p raqam kiritdingiz")
    }
  };

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
            <input
              type="text"
              onChange={(e) => setAccept(e.target.value)}
              className="modalInput"
              placeholder="+998 ( )"
            />
            <p className="warning">{accept}</p>
          </form>
        </div>
        <div className="inModalForm">
          <form className="modalForm">
            <p>Parol</p>
            <input
              type="password"
              // onChange={(e) => setPass(e.target.value)}
              className="modalInput"
            />
          </form>
          <div className="mainCheckbox">
            <input type="checkbox" className="checkbox" />
            <p>Eslab qolish</p>
          </div>
          <div className="warning">{error}</div>
          <div className="enterBtn">
            <button
              className="btn"
              onClick={() => {
                onSubmit();
              }}
            >
              Kirish
            </button>
            <span className="createParol">Parolni tiklash</span>
            <span className="register">Royhatdan o`tish</span>
            <p>{accessNumber}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Modul;
