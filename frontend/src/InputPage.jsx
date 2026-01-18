import { useState } from "react";
import "./InputPage.css";
import "./InputGrid.css";
import InputGrid from './InputGrid.jsx';
import Background from './assets/background.png'

function InputPage() {
  return (
    <>
      <img src={Background} class='background-image' />
      <div class="headerContainer">
        <p id='input-page-title' class='title-style'>Urban Life Optimizer</p>
        <div id="input-page-horizontal-line" class="horizontal-line"></div>
      </div>
      <InputGrid />
    </>
  );
}

export default InputPage;
