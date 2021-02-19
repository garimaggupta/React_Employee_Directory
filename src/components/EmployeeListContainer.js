import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import EmployeeTableList from "./EmployeeTableList"

class SearchResultContainer extends Component {
    state = {
        search: "",
        results: []
    };

    // When this component mounts, Call the API route to get list of Employees
    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees = () => {
        API.search()
            .then(res => {
                console.log(res);
                this.setState({ results: res.data.results })
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        this.setState({
            search: value
        });
    };


    render() {
        return (
            <div className="container">
                <Jumbotron />
                <div className="form-outline">
                    <input type="search" className="form-control" placeholder="Search"
                        aria-label="Search" onChange={this.handleInputChange} />
                </div>
                <EmployeeTableList list={this.state.results} search_term={this.state.search} />
            </div>
        );
    }
}

export default SearchResultContainer;
