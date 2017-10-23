import React, { Component } from 'react';
import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';

class MainPage extends Component {
	constructor(props) {
		super(props);
		this.updateDimensions = this.updateDimensions.bind(this);
		this.scrolledAmount = this.scrolledAmount.bind(this);
		this.state = {
			width: window.innerWidth,
			scrolledAmount: window.scrollY
		}
	}

	// getting innerWidth to solve mediaQueries in editableTweet

		componentWillMount() {
			this.updateDimensions();
		}
		componentDidMount() {
			window.addEventListener("resize", this.updateDimensions);
			// pass in dynamic props so cwu runs in video
			window.addEventListener("scroll", this.scrolledAmount);
		}

		updateDimensions(){
			const width = window.innerWidth;
			this.setState({width});
		}

		scrolledAmount(){
			const scrolledAmount = window.scrollY;
			this.setState({scrolledAmount});
		}

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

	export default MainPage;