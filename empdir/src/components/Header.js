import React from "react";
import logo from '../Logo.png';

function Header(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Jack ERP Employee Directory
        </p>
      </header>
    </div>
  );
}

export default Header;