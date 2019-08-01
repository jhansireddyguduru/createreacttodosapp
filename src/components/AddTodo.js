import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddTodo extends Component {
  state = {
    title: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addToDo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          value={this.state.title}
          style={{ flex: "10", padding: "5px" }}
          placeholder="add things to do"
          onChange={this.onChange}
        />
        <input type="submit" style={{ flex: "1" }} />
      </form>
    );
  }
}

//PropTypes
AddTodo.propTypes = {
  addToDo: PropTypes.func.isRequired
};
