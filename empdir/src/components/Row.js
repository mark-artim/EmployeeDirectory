import React, { useEffect, useState } from "react";
import API from "../utils/API"
// function Row({ search }, props) {
function Row(props) {
    console.log('Row props:',props.search)
    let searchString = props.search;
    console.log('searchString ',searchString);
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
    }, [])

    const searchEmployees = (searchString) => {
        console.log('I AM IN SEARCH EMPLOYEES1 ',searchString);
        if (!searchString) {
            searchString = "";
        };
        console.log('I AM IN SEARCH EMPLOYEES2 ',searchString);
        const stringifyArray = EmployeeState.map((item) => {
            return JSON.stringify(item)
        });
        console.log('STRINGIFYARRAY: ',stringifyArray);
        const results = stringifyArray.filter(data => data.includes(searchString));
        setEmployeeStateFiltered(results.map(i => JSON.parse(i)));
    }

    // useEffect(() => {
    //     searchEmployees(props.search);
    // }, [])

  return (
        <>
        {EmployeeState.filter(data => data.name.first.includes(searchString) || data.name.last.includes(searchString)).map(employee =>
        // {EmployeeStateFiltered.map(employee =>
        <tr>
            <td><img src={employee.picture.thumbnail}/></td>
            <td>{employee.name.first} {employee.name.last}</td>
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
