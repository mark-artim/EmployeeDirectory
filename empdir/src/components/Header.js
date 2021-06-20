import React from "react";
import logo from '../Logo.png';
import Search from "./Search";

function Header(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Jack ERP Employee Directory
        </p>
        <Search search={props.search} setSearch={props.setSearch} />
      </header>
    </div>
  );
}

export default Header;