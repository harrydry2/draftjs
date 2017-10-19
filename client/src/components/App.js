import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			top: 0,
			left: 0,
		}
	}

	mousePosition(e) {
		this.setState({
			top: e.pageY - window.scrollY - 2,
			left: e.pageX - 12,
		})
	}

	render() {
		const {top, left} = this.state;
		const {ye} = this.props.etReducer;
		let opacity = (ye ? 1 : 0);
		const cursor = {
		  top: `${top}px`,
		  left: `${left}px`,
		  opacity,
		};
		let cursorOn = (ye ? "none" : "auto");
		console.log(cursorOn)
		const body = {
			cursor: `${cursorOn}`
		}
		return (
			<div onMouseMove={(e) => this.mousePosition(e)} style={body}>
				<div className="cursor" style={cursor} />
				<Page1 />
				<Page2 />
				<Page3 />
			</div>
		);
	}
}

function mapStateToProps({etReducer}) {
  return {etReducer};
}

export default connect(mapStateToProps)(App);