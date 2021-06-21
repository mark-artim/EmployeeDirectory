// import React, {useState, useEffect } from "react";
import axios from "axios";

export default {
    getEmployees: function() {
        return new Promise((resolve, reject) => {
            axios
            .get("https://randomuser.me/api/?results=200&inc=name,picture,email,cell,location")
            .then(res => {
                const employees = res.data;
                const results = res.data;
                // const results = employees.map(employee => {
                    // console.log('API!! employees>>>>>',employees)
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


