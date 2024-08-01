// src/Greeting.js

import React, { Component } from "react";

class Greeting extends Component {
	render() {
		return <h1>Welcome, {this.props.name}!</h1>;
	}
}

export default Greeting;