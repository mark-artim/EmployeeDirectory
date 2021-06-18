import React from "react";
import Row from "./Row";

function TableHeader(props) {
    console.log('props:', props)
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                <Row />
            </tbody>    
        </table>
    );
}

export default TableHeader;