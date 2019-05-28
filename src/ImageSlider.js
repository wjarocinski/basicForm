import React from "react";

export default class ImageSlider extends React.Component {
  state = {
    images: [
      "https://images.unsplash.com/photo-1556185607-91b0ea1203d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1555990538-1149ac2dac44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80",
      "https://images.unsplash.com/photo-1556091674-a6a6e6504956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
      "https://images.unsplash.com/photo-1556132989-6c20e093fd08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1322&q=80"
    ],
    idx: 0
  };

  handleNext = () => {
    this.setState({
      idx: this.state.idx + 1
    });
  };
  handlePrevious = () => {
    this.setState({
      idx: this.state.idx + 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handlePrevious}>previous</button>
        <img
          alt="stock"
          style={{
            width: 500,
            height: 300
          }}
          src={this.state.images[this.state.idx]}
        />
        <button onClick={this.handleNext}>next</button>
      </div>
    );
  }
}
