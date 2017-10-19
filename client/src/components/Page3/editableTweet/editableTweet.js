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
	// give height to actual container
	if (window.innerWidth > 1199) {
		var heightBIC = (251.96 + (24.32)*this.props.textReducer.lines)
	} else if(window.innerWidth < 1199 && window.innerWidth > 414) {
		var heightBIC = (241.88 + (23.35)*this.props.textReducer.lines)
	} else if (window.innerWidth <= 414) {
		var heightBIC = (173.6906 + (16.35)*this.props.textReducer.lines)
	}
	// give height to relative container
	if (window.innerWidth <= 1020 && window.innerWidth > 414) {
		var heightBICpositionRelative = (241.88 + (23.35)*this.props.textReducer.lines)
	} else if(window.innerWidth <= 414) {
		var heightBICpositionRelative = (173.6906 + (16.35)*this.props.textReducer.lines)
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