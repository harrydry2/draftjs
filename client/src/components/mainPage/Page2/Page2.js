import React, { Component } from 'react';
import Video from './Video';
import CheckmarkOutline1 from 'svg-react-loader?name=Icon!../../../svg/checkmarkOutline1.svg';
import CheckmarkOutline2 from 'svg-react-loader?name=Icon!../../../svg/checkmarkOutline2.svg';
import CheckmarkOutline3 from 'svg-react-loader?name=Icon!../../../svg/checkmarkOutline3.svg';

class Page2 extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="page2Wrapper">
				<div className="P2WrapperBackground" />
				<div className="bodyContainerp2">
					<div className="headerTextp2 gothamRM"> Make your canvas in three simple steps </div>
					<div className="actionCheckContainer">
						<CheckmarkOutline1 className='checkmarkOutline' />
						<div className="instruction gothamBook instruction1">Input a unique twitter handle and press enter. e.g. <div className="rfHandle">@RogerFederer</div></div>
					</div>
					<div className="actionCheckContainer">
						<CheckmarkOutline2 className='checkmarkOutline' />
						<div className="instruction gothamBook instruction2">Write up your tweet and throw in an emoji or two 😃 🚀</div>
					</div>
					<div className="actionCheckContainer">
						<CheckmarkOutline3 className='checkmarkOutline' />
						<div className="instruction gothamBook">Edit your Retweets & likes. Then input a twitter handle to change favourites</div>
					</div>
				</div>
				<Video scrolledAmount={this.props.scrolledAmount} />
			</div>
		)
	}
}
export default Page2