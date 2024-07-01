import React from 'react';
import logo from '../../assets/logo.svg';
export default function Sell() {
  return (
    <div className="sellWrap">
      <h2>Sell width C'Arte</h2>
      <div className="sellbox">
        <div className="logoSection">
          {' '}
          <img src={logo} alt="logo"></img>
        </div>
        <div className="proposal">
          <p>C'Arte에 문의해주세요 </p>
          <div className="sellBtn">Request</div>
        </div>
      </div>
    </div>
  );
}
