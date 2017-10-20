import React, { Component } from 'react';
import P2WrapperBackground from 'svg-react-loader?name=Icon!../../svg/backgroundP2.svg';
import P2WrapperBackgroundTablet from 'svg-react-loader?name=Icon!../../svg/backgroundP2Tablet.svg';
import P2WrapperBackgroundTabletSmaller from 'svg-react-loader?name=Icon!../../svg/backgroundP2TabletSmaller.svg';
import P2WrapperBackgroundPhone from 'svg-react-loader?name=Icon!../../svg/backgroundP2Phone.svg';
import Video from './Video';
import CheckmarkOutline from 'svg-react-loader?name=Icon!../../svg/checkmarkOutline.svg';

class Page2 extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="page2Wrapper">
				<P2WrapperBackgroundTablet className='P2WrapperBackgroundTablet' />
				<P2WrapperBackgroundTabletSmaller className='P2WrapperBackgroundTabletSmaller' />
				<P2WrapperBackgroundPhone className='P2WrapperBackgroundPhone' />
				<div className="bodyContainerp2">
					<div className="headerTextp2 gothamRM"> Make your canvas in three simple steps </div>
					<div className="actionCheckContainer">
						<CheckmarkOutline className='checkmarkOutline' />
						<div className="instruction gothamBook instruction1">Enter a unique twitter username and press enter</div>
					</div>
					<div className="actionCheckContainer">
						<CheckmarkOutline className='checkmarkOutline' />
						<div className="instruction gothamBook instruction2">Write up your tweet and throw in an emoji or two 😃🚀</div>
					</div>
					<div className="actionCheckContainer">
						<CheckmarkOutline className='checkmarkOutline' />
						<div className="instruction gothamBook">Hand pick your favourites. Enter your retweets and likes and you’re away!</div>
					</div>
				</div>
				<Video scrolledAmount={this.props.scrolledAmount} />
			</div>
		)
	}
}
export default Page2