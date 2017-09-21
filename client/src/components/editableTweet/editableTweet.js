import React, { Component } from 'react';
import Profile from './Profile';
import Text from './Text';
import Stats from './Stats';
import Footer from './Footer';
// import FavouritesAnimation from './FavouritesAnimation';

class editableTweet extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<div className="backgroundImage" />
				<div className="backgroundImageContainer">
					<div className="backgroundTweet">
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
export default editableTweet;