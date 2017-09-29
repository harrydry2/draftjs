import React, { Component } from 'react';
import EditableTweet from './editableTweet/editableTweet';
import PaymentBlock from './PaymentBlock';
import { connect } from 'react-redux';

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
				<div className="wrapper">
					<EditableTweet />
					<PaymentBlock />
					<div className="laptopPlayback">
						<img src="https://s3.eu-west-2.amazonaws.com/lifeishappening/macBook.png" className="macBook"/>
						<video src="https://s3.eu-west-2.amazonaws.com/lifeishappening/obama.mp4" autoPlay muted playsInline loop width="400" className="obamaVideo" />
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({etReducer}) {
  return {etReducer};
}

export default connect(mapStateToProps)(App);