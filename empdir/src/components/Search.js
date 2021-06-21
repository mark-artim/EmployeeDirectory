import React from "react";

function Search({search, setSearch}) {
return (
        <form className="form">
          <input
            value={search}
            name="searchName"
            // onChange={e => console.log(e.target.value)}
            // onChange={e => setSearch(e.target.value)}
            onChange={(e) => {
              setSearch(e.target.value);
              // console.log(e.target.value);
            }}
            type="search"
            placeholder="Search Name"
            className="form-control me-2"

          />
          {/* <button className="btn btn-outline-success" type="submit">Submit</button> */}
          <br></br>
          {/* <TableHeader search={search} /> */}
        </form>
    );
  }

  export default Search;
