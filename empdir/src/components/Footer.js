import React from "react";

function Footer(props) {
    console.log(props);
  return (
    <div className="App-footer">
      <h3>Hey! I'm the Footer!</h3>
      <h4>So long!  {props.color}</h4>
    </div>
  );
}

export default Footer;