import React, { useEffect, useState } from "react";
import API from "../utils/API"

function Row({ search }) {
    // console.log('Row props:',props)
    const [EmployeeState, setEmployeeState] = useState([]);
    const [EmployeeStateFiltered, setEmployeeStateFiltered] = useState([])
        // {
        // name.first: "",
        // cell: "",
        // email: "",
        // location.city: "",
        // location.state: "",
        // location.country: "",
        // }
    // );
    useEffect(() => {
        API.getEmployees()
        .then((response) => {
            setEmployeeState(response.results);
            setEmployeeStateFiltered(response.results);
            // console.log('response.results: ',response.results);
            console.log('empstate: ',EmployeeState);
        });
    },[])

    const searchEmployees = (searchString) => {
        console.log('I AM IN SEARCH EMPLOYEES')
        // let searchString = {search}
        const stringifyArray = EmployeeState.map((item) => {
            JSON.stringify(item)
        })
        const results = stringifyArray.filter(data => data.includes(searchString));
        setEmployeeStateFiltered(results.map(i => JSON.parse(i)));
    }


  return (
        <>
        {/* {EmployeeState.filter(data => data.name.first.includes(search)).map(employee => */}
        {EmployeeState.map(employee =>
        <tr>
            <td><img src={employee.picture.thumbnail}/></td>
            <td>{employee.name.first}</td>
            <td>{employee.cell}</td>
            <td>{employee.email}</td>
            <td>{employee.location.city}</td>
            <td>{employee.location.state}</td>
            <td>{employee.location.country}</td>
        </tr>
        )}
        </>
  );
}

export default Row;
