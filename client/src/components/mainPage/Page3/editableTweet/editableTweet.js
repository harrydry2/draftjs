import React, { Component } from 'react';
import Profile from './Profile';
import Text from './Text';
import Stats from './Stats';
import Footer from './Footer';
import { connect } from 'react-redux';

class editableTweet extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {width} = this.props
	// give height to actual container
	if (width > 1175) {
		var heightBIC = (251.96 + (24.32)*this.props.textReducer.lines)
	} else if(width <= 1175 && width > 600) {
		var heightBIC = (246.346875 + (23.85)*this.props.textReducer.lines)
	} else if(width <= 600 && width > 550) {
		var heightBIC = (224.665625 + (21.55)*this.props.textReducer.lines)
	} else if(width <= 550 && width > 519) {
		var heightBIC = (211.2875 + (20.2)*this.props.textReducer.lines)
	} else if(width <= 519 && width > 465) {
		var heightBIC = (195.45 + (18.4)*this.props.textReducer.lines)
		// phones
	} else if (width <= 465 && width > 375) {
		var heightBIC = (178.8375 + (17.8)*this.props.textReducer.lines) // m=42
	} else if (width <= 375 && width > 370) {
			var heightBIC = (157.6906 + (16.35)*this.props.textReducer.lines) // m=32
	} else if (width <= 370 && width > 358) {
			var heightBIC = (151.925 + (15.6)*this.props.textReducer.lines) // m=32
	} else if (width <= 358) {
			var heightBIC = (136.55 + (13.6)*this.props.textReducer.lines) // m=32
	}


	// GIVE HEIGHT TO RELATIVE CONTAINER
	if (width <= 1060 && width > 600) {
		var heightBICpositionRelative = (246.346875 + (23.85)*this.props.textReducer.lines)
	} else if(width <= 600 && width > 550) {
		var heightBICpositionRelative = (224.665625 + (21.55)*this.props.textReducer.lines)
	} else if(width <= 550 && width > 519) {
		var heightBICpositionRelative = (211.2875 + (20.2)*this.props.textReducer.lines)
	} else if(width <= 519 && width > 465) {
		var heightBICpositionRelative = (195.45 + (18.4)*this.props.textReducer.lines)
		// phones
	} else if(width <= 465 && width > 375) {
		var heightBICpositionRelative = (178.8375 + (17.8)*this.props.textReducer.lines)// m=42
	} else if(width <= 375 && width > 370) {
		var heightBICpositionRelative = (161.4625 + (15.8)*this.props.textReducer.lines) // m=32
	} else if(width <= 370 && width > 358) {
		var heightBICpositionRelative = (151.925 + (15.6)*this.props.textReducer.lines) // m=32
	} else if (width <= 358 && width > 100) {
			var heightBICpositionRelative = (136.55 + (13.6)*this.props.textReducer.lines) // m=32
	} else {
		var heightBICpositionRelative = (0);
	}

	const positionRelative = {
	  height: `${heightBICpositionRelative}px`
	};

	if (this.props.infoObject.backgroundImage !== `url('https://pbs.twimg.com/profile_banners/1337785291/1487462562')`) {
		var backgroundImageNoRF = this.props.infoObject.backgroundImage;
	} else {
		var backgroundImageNoRF = `url("https://pbs.twimg.com/profile_banners/14123683/1402396225")`;
	}
	const backgroundImageStyle = {
	  backgroundImage: backgroundImageNoRF,
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
						<div className="backgroundTweet" style={backgroundTweet}>
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

export default connect(mapStateToProps)(editableTweet);