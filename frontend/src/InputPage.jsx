import { useState } from "react";
import "./InputPage.css";
import "./InputGrid.css";
import InputGrid from './InputGrid.jsx';
import Background from './assets/background.png'

function InputPage() {
  return (
    <>
      <img src={Background} class='background-image' />
      <div className="headerContainer">
        <p className="title">Urban Life Optimizer</p>
        <div className="line"></div>
      </div>
      <InputGrid />
    </>
  );
}

export default InputPage;
