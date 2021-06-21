// import React, {useState, useEffect } from "react";
import axios from "axios";

export default {
    getEmployees: function() {
        return new Promise((resolve, reject) => {
            axios
            .get("https://randomuser.me/api/?results=50&inc=name,picture,email,cell,location")
            .then(res => {
                const employees = res.data;
                const results = res.data;
                // const results = employees.map(employee => {
                    console.log('API!! employees>>>>>',employees)
                //     return {
                //         firstname: employee.name.first,
                //         lastname: employee.name.last,
                //         email: employee.email
                //     };
                // });
                resolve(results);
            })
            .catch(err => reject(err));
        });
    }
  };

// const Employee = () => {
//     // const [hasError, setErrors] = useState(false);
//     // const [employee, setEmployee] = useState({});

//     async function fetchData() {
//         const res = await fetch ("https://randomuser.me/api/");
//             res
//             .json()
//             // .then(res => setEmployee(res))
//             // .catch(err);
//     }

    // useEffect(() => {
    //     fetchData();
    // },[]);

    // return (
    //     <div>
    //     <span>{JSON.stringify(employee)}</span>
    //     <hr />
    //     <span>Has error: {JSON.stringify(hasError)}</span>
    //     </div>
    // );
    // };

// export default Employee;


// Export an object containing methods we'll use for accessing the Dog.Ceo API


