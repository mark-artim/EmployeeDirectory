import React from "react";
import Row from "./Row";

// handleInputChange = event => {
//     // Getting the value and name of the input which triggered the change
//     const { name, value } = event.target;

//     // Updating the input's state
//     this.setState({
//       [name]: value
//     });
//   };

function fuckOff(e) {
    console.log('Go fuck yourself: ',e.target.value)
}

function Search({search, setSearch}) {
return (
        <form className="form">
          <input
            value={search}
            name="searchName"
            // onChange={e => console.log(e.target.value)}
            onChange={e => setSearch(e.target.value)}
            // onChange={e => Row.searchEmployees(e.target.value)}
            type="search"
            placeholder="Search Name"
            className="form-control me-2"

          />
          {/* <button className="btn btn-outline-success" type="submit">Submit</button> */}
          <br></br>
        </form>
    );
  }

  export default Search;
