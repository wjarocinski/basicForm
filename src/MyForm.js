import React from "react";

export default class MyForm extends React.Component {
  state = {
    inputValue: "",
    textAreaValue: "",
    checkboxValue: false,
    selectValue: "Miss."
  };

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";

    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="simpleForm">
          <h3>Simple form test:</h3>
          <input
            name="inputValue"
            style={{ margin: 10, width: 120, height: 20 }}
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <textarea
            name="textAreaValue"
            style={{ margin: 10, width: 160, height: 30 }}
            value={this.state.textAreaValue}
            onChange={this.handleChange}
          />
          <input
            name="checkboxValue"
            type="checkbox"
            checked={this.state.checkboxValue}
            onChange={this.handleChange}
          />
          <div>
            <select
              name="selectValue"
              value={this.state.selectValue}
              onChange={this.handleChange}
            >
              <option>Mr.</option>
              <option>Miss.</option>
              <option>Ms.</option>
              <option>Mrs.</option>
            </select>
          </div>
          <button type="submit" style={{ margin: 20, width: 80 }}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}
