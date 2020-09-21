import React, { Component } from "react";

export default class Searchbox extends Component {
  state = {
    value: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          value={value}
          onChange={this.handleChange}
          placeholder="Enter name"
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
