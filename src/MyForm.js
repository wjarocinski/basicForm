import React from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  enabled: false,
  nameError: "",
  emailError: "",
  passwordError: ""
};

export default class MyForm extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";

    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    if (!this.state.name) {
      nameError = "name cannot be blank!";
    }
    if (!this.state.email.includes("@")) {
      emailError = "invalid email!";
    }
    if (this.state.password.length < 5) {
      passwordError = "password must have min 5 characters!";
    }

    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError, passwordError });
      return false;
    }
    return true;
  };

  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //clear state
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="simpleForm">
          <h3>Simple form test:</h3>
          <input
            name="name"
            placeholder="name"
            style={{ margin: 2, width: 150, height: 20 }}
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 14, color: "red" }}>
            {this.state.nameError}
          </div>
          <input
            name="email"
            placeholder="email"
            style={{ margin: 2, width: 150, height: 20 }}
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 14, color: "red" }}>
            {this.state.emailError}
          </div>
          <input
            name="password"
            type="password"
            placeholder="password"
            style={{ margin: 2, width: 150, height: 20 }}
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 14, color: "red" }}>
            {this.state.passwordError}
          </div>
          Do you agree?
          <input
            name="enabled"
            type="checkbox"
            style={{ width: 20, height: 20 }}
            checked={this.state.enabled}
            onChange={this.handleChange}
          />
          <button
            disabled={!this.state.enabled}
            type="submit"
            style={{ margin: 20, width: 100 }}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}
