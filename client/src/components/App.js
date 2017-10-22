import React, { Component } from 'react';
import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';

class App extends Component {
	constructor(props) {
		super(props);
		this.updateDimensions = this.updateDimensions.bind(this);
		this.state = {
			width: window.innerWidth
		}
	}

// getting innerWidth to solve mediaQueries in editableTweet

	componentWillMount() {
		this.updateDimensions();
	}
	componentDidMount() {
		window.addEventListener("resize", this.updateDimensions);
	}

	updateDimensions(){
		const width = window.innerWidth;
		this.setState({width});
	}

// getting mouse position

	render() {
		return (
			<div>
				<Page1 />
				<Page2 scrolledAmount={this.state.scrolledAmount} />
				<Page3 width={this.state.width} />
			</div>
		);
	}
}

export default App;