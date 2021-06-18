import React, {useState, useEffect } from "react";
import ReactDOM from "react-dom";
import API from "../utils/API";

const Employee = () => {
    const [hasError, setErrors] = useState(false);
    const [employee, setEmployee] = useState({});

async function fetchData() {
    const res = await fetch ("https://randomuser.me/api/?results=3&?inc=name,picture,email,cell");
    res
        .json()
        .then(res => setEmployee(res))
        .catch(err => setErrors(err));
}

useEffect(() => {
    fetchData();
    console.log('EmpData FetchData employee = ',employee)
},[]);

return (
    <div>
      <span>{JSON.stringify(employee)}</span>
      {/* <span>NAME:{employee[0].name.last}</span> */}
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
      {/* <span>My name is {employee.name.first}</span> */}
    </div>
  );
};

function HelloDiv() {
  return (
    <div>
      <h1>Hey guys! I'm a header!</h1>
      <h2>Things I like!</h2>
      <ul>
        <li>Peas</li>
        <li>Carrots</li>
        <li>Gin</li>
      </ul>
    </div>
  );
}

// export default HelloDiv;
export default Employee;