import React from "react";
import Row from "./Row";

function TableHeader(props) {
    console.log('props in TableHeader: ', props);
    return (
        <div>
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
                <Row search={props.search}/>
            </tbody>    
        </table>
        </div>
    );
}

export default TableHeader;