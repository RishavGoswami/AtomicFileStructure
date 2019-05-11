import React, { Component } from "react";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleKeyDown(e) {
    if (e.key === "Enter") {
      this.getWeatherData();
    }
  }

  render() {
    return (
      <>
        <div style={{ position: "fixed" }}>Hello</div>
      </>
    );
  }
}

export default HomePage;
