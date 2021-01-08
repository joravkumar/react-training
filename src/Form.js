import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  state = {
    name: "",
    age: "",
    dob: "",
    address: "",
    gender: ""
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSave = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSave}>
        <span>
          {" "}
          Name: <input onChange={this.handleInput} name="name" />
        </span>
        <span>
          {" "}
          Age: <input onChange={this.handleInput} type="number" name="age" />
        </span>
        <span>
          {" "}
          DOB: <input onChange={this.handleInput} type="date" name="dob" />
        </span>
        <span>
          Gender:{" "}
          <span>
            Male: <input onChange={this.handleInput} type="radio" value="male" name="gender" />{" "}
          </span>
          <span>
            Female:
            <input onChange={this.handleInput} type="radio" value="female" name="gender" />
          </span>
        </span>
        <span>
          Address: <textarea onChange={this.handleInput} name="address" />
        </span>
        <button type="submit" onClick={this.onSave}>
          Save User
        </button>
      </form>
    );
  }
}
