import React from "react";
import moment from "moment";
import EmployeeContainer from "./EmployeeContainer";

export default function List(props) {
  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            {/* picture.large */}
            <th scope="col">Name</th>
            {/* name.first AND name.last*/}
            <th scope="col">Phone</th>
            {/* phone */}
            <th scope="col">E-mail</th>
            {/* email */}
            <th scope="col">DOB</th>
            {/* dob.date */}
          </tr>
        </thead>
        <tbody>
          {
            // console.log(props.employees)
            props.employees.map((employee) => {
              return (
                <tr>
                  <td scope="row">
                    <img src={employee.picture.thumbnail} />{" "}
                  </td>
                  <td>
                    {employee.name.first} {employee.name.last}
                  </td>
                  <td>{employee.phone}</td>
                  <td>{employee.email}</td>
                  <td>
                    {moment(employee.dob.date, "YYYY-MM-DD").format(
                      "MM/DD/YYYY"
                    )}
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}
