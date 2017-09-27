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
	const {backgroundImage} = this.props.infoObject;
	let heightBIC = 245 + (23*this.props.textReducer.lines);
	const backgroundImageStyle = {
	  backgroundImage,
	  height: `${heightBIC}px`
	};
	const backgroundImageContainer = {
	  height: `${heightBIC}px`
	};
	let heightBT = 186 + (32*this.props.textReducer.lines)
	const backgroundTweet = {
	  height: `${heightBT}px`
	};
		return (
			<div>
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