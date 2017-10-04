import React, { Component } from 'react';
import EditableTweet from './editableTweet/editableTweet';
import NotEditableTweet from './notEditableTweet/notEditableTweet';
import PaymentBlock from './PaymentBlock';
import Page3 from './Page3';
import Video from './Video';
// import Levitate from './Levitate';
import { connect } from 'react-redux';
import scrollToComponent from 'react-scroll-to-component';

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
				<div className="page1Wrapper">
					<div className="page1WrapperBackground" />
					<NotEditableTweet />
					{/*<Video />*/}
				</div>
				<div 
					className="page2Wrapper"
					ref={(element) => { this.page2Wrapper = element; }}
				>
					<EditableTweet />
					<PaymentBlock />
				</div>
				<Page3 />
			</div>
		);
	}
}

function mapStateToProps({etReducer}) {
  return {etReducer};
}

export default connect(mapStateToProps)(App);