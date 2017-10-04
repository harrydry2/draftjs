import React, { Component } from 'react';
import NotProfile from './notProfile';
import NotText from './notText';
import NotStats from './notStats';
import NotFooter from './notFooter';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

const heightBIC = [291, 337, 314, 314];
const heightBT = [250, 314, 282, 282];
const backgroundImage = [`url("https://pbs.twimg.com/profile_banners/45157016/1496254233")`, `url("https://pbs.twimg.com/profile_banners/62513246/1502828967")`, `url("https://pbs.twimg.com/profile_banners/19397785/1419227197")`, `url("https://pbs.twimg.com/profile_banners/1337785291/1487462562")`]
let index = 0;

class notEditableTweet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			heightBIC: heightBIC[0],
			heightBT: heightBT[0],
			backgroundImage: backgroundImage[0]
		};
	}

componentDidMount() {
  setInterval(() => {
	index === 3 ? index=0 : index++;
  	this.setState({
  		heightBIC: heightBIC[index],
  		heightBT: heightBT[index],
  	})
  }, 2800);
}

	render() {
	const backgroundImageStyle = {
	  backgroundImage:`${backgroundImage[index]}`,
	  height: `${heightBIC[index]}px`
	};
	const backgroundImageContainer = {
	  height: `${heightBIC[index]}px`
	};
	const backgroundTweet = {
	  height: `${heightBT[index]}px`
	};
		return (
			<div className="borderBox">
				<div className="backgroundImage" style={backgroundImageStyle}/>
				<div className="backgroundImageContainer" style={backgroundImageContainer}>
					<div 
						className="backgroundTweet"
						style={backgroundTweet} 
					>
						<NotProfile />
						<NotText />
						<NotStats />
						<NotFooter />
					</div>
				</div>
			</div>
		);
	}
}

export default notEditableTweet;