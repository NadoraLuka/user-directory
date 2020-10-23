import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import List from "./List";
import Jumbotron from "./Jumbotron";

class EmployeeContainer extends Component {
  state = {
    results: [],
    search: "",
  };

  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = () => {
    API.search()
      .then((res) => {
        this.setState({ results: res.data.results });
        console.log(this.state.results);
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    console.log(name, value);
    this.setState({
      [name]: value,
    });

    console.log(this.state.results.length);

    if (value.length === 0) {
      this.searchEmployees();
    }

    if (this.state.results.length > 0) {
      let newResults = this.state.results.filter((employee) => {
        return (
          employee.name.first.indexOf(value) > -1 ||
          employee.name.last.indexOf(value) > -1
        );
      });
      console.log(newResults);
      if (newResults.length > 0) {
        this.setState({
          results: newResults,
        });
      }
    }
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  render() {
    return (
      <div className="container-fluid justify-content-center text-center">
        {/* {console.log(this.state.results)} */}
        <Jumbotron />
        <SearchForm
          handleInputChange={this.handleInputChange}
          value={this.state.search}
        />
        {this.state.results.length === 0 ? (
          "employee not found"
        ) : (
          <List employees={this.state.results} />
        )}
      </div>
    );
  }
}
export default EmployeeContainer;
