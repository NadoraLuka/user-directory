import React from "react";

//when using SearchForm, have table update to each letter typed

export default function SearchForm(props) {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <input
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search For an Employee"
            id="search"
          />
        </div>
      </form>
    </div>
  );
}
