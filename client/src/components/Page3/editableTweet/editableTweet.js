import React, { Component } from 'react';
import Profile from './Profile';
import Text from './Text';
import Stats from './Stats';
import Footer from './Footer';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';

class editableTweet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ye: false,
		}
	}
	
	yeOn(){
		this.setState({ye: true})
	}
	yeOff(){
		this.setState({ye: false})
	}

	componentDidUpdate(prevProps, prevState) {
	  this.props.saveYeState(this.state.ye)
	}

	render() {
		const {width} = this.props
	// give height to actual container
	if (width > 1199) {
		var heightBIC = (251.96 + (24.32)*this.props.textReducer.lines)
	} else if(width < 1199 && width > 414) {
		var heightBIC = (241.88 + (23.35)*this.props.textReducer.lines)

		// phones
	} else if (width <= 414 && width > 375) {
		var heightBIC = (178.8375 + (17.8)*this.props.textReducer.lines) // m=42
	} else if (width <= 375 && width > 371) {
			var heightBIC = (157.6906 + (16.35)*this.props.textReducer.lines) // m=32
	} else if (width <= 370 && width > 359) {
			var heightBIC = (151.925 + (15.6)*this.props.textReducer.lines) // m=32
	} else if (width <= 358) {
			var heightBIC = (136.55 + (13.6)*this.props.textReducer.lines) // m=32
	}
	// give height to relative container
	if (width <= 1020 && width > 414) {
		var heightBICpositionRelative = (241.88 + (23.35)*this.props.textReducer.lines)

		// phones
	} else if(width <= 414 && width > 375) {
		var heightBICpositionRelative = (178.8375 + (17.8)*this.props.textReducer.lines)// m=42
	} else if(width <= 375 && width > 371) {
		var heightBICpositionRelative = (161.4625 + (15.8)*this.props.textReducer.lines) // m=32
	} else if(width <= 370 && width > 359) {
		var heightBICpositionRelative = (151.925 + (15.6)*this.props.textReducer.lines) // m=32
	} else if (width <= 358 && width > 100) {
			var heightBICpositionRelative = (136.55 + (13.6)*this.props.textReducer.lines) // m=32
	} else {
		var heightBICpositionRelative = (0);
	}

	const positionRelative = {
	  height: `${heightBICpositionRelative}px`
	};
	const backgroundImageStyle = {
	  backgroundImage: this.props.infoObject.backgroundImage,
	  height: `${heightBIC}px`
	};
	const backgroundImageContainer = {
	  height: `${heightBIC}px`
	};
	// this already gets scaled down
	var heightBT = 186 + (32*this.props.textReducer.lines)
	const backgroundTweet = {
	  height: `${heightBT}px`
	};

		return (
			<div className="borderBox positionRelative" style={positionRelative}>	
					<div className="backgroundImage" style={backgroundImageStyle}/>
					<div className="backgroundImageContainer" style={backgroundImageContainer}>
						<div className="backgroundTweet" style={backgroundTweet}  onMouseOver={(e) => this.yeOn(e)} onMouseLeave={(e) => this.yeOff(e)}>
							<Profile />
							<Text />
							<Stats />
							<Footer />
						</div>
					</div>
			</div>
		);
	}
}
function mapStateToProps({ infoObject, textReducer }) {
  return { infoObject, textReducer };
}

export default connect(mapStateToProps, actions)(editableTweet);