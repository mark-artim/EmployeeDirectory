import React, { useEffect, useState } from "react";
import API from "../utils/API"



function Row(props) {
    console.log('props:',props)
    const [EmployeeState, setEmployeeState] = useState();
    useEffect(() => {
        API.getEmployees()
        .then((response) => {
            setEmployeeState(response.results);
            console.log('response.results: ',response.results);
            console.log('empstate: ',EmployeeState);
        });
    },[])

  return (
        <>
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
