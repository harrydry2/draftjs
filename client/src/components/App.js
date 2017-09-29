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
			isLoading: undefined,
		}
	}

	mousePosition(e) {
		this.setState({
			top: e.pageY - window.scrollY - 2,
			left: e.pageX - 12,
		})
	}

	imgLoaded(e){
		this.setState({isLoading: true})
		console.log('e')
	}

	vidLoaded(e){
		this.setState({isLoading: false})
		console.log('jeeee')
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
		const {isLoading} = this.state
		return (
			<div onMouseMove={(e) => this.mousePosition(e)} style={body}>
				<div className="cursor" style={cursor} />
				<div className="wrapper">
					<EditableTweet />
					<PaymentBlock />
					<div className={`laptopPlayback ${isLoading ? 'isLoading' : ''}`}>
						<img src="https://s3.eu-west-2.amazonaws.com/lifeishappening/macBook1.png" onLoad={(e) => this.imgLoaded(e)} className="macBook"/>
						<video src="https://s3.eu-west-2.amazonaws.com/lifeishappening/obama.mp4" onCanPlayThrough={(e) => this.vidLoaded(e)} autoPlay muted playsInline loop width="400" className="obamaVideo" />
						<div className="lds-css ng-scope positionSpinner">
						<div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
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