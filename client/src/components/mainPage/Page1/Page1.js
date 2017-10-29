import React, { Component } from 'react';
import P1WrapperBackground from 'svg-react-loader?name=Icon!../../../svg/backgroundP1100VH.svg';
import P1WrapperBackgroundTablet from 'svg-react-loader?name=Icon!../../../svg/backgroundP1Tablet.svg';
import P1WrapperBackgroundTabletSmaller from 'svg-react-loader?name=Icon!../../../svg/backgroundP1TabletSmaller.svg';
import P1WrapperBackgroundPhone from 'svg-react-loader?name=Icon!../../../svg/backgroundP1Phone.svg';

class Page1 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="page1Wrapper">
				<P1WrapperBackground className='P1WrapperBackground' />
				<P1WrapperBackgroundTablet className='P1WrapperBackgroundTablet' />
				<P1WrapperBackgroundTabletSmaller className='P1WrapperBackgroundTabletSmaller' />
				<P1WrapperBackgroundPhone className='P1WrapperBackgroundPhone' />
				<img src="https://s3.eu-west-2.amazonaws.com/lifeishappening/finalLogoUnlessCompress.png" className="canvasLogo" alt=""/>
				<div className="bodyContainer">
					<div className="headerText gothamRM animatedHeader">Turn Custom Tweets into Canvas Prints</div>
					<div className="bodyText gothamBook animatedBody"><div className="underpants">Tired of buying underpants?</div>Give a unique gift this Christmas.<br/> Order your custom canvas before the 15th December for free delivery 🎁</div>
					<div className="animatedBody">
						<div className="ctaSectionGlitch">
							<div className="ctaMoney">£24</div>
							<div className="boldBookWrapper">
								<div className="ctaBold">Make Your Canvas</div>
								<div className="ctaBook">Order now for free shipping</div>
							</div>
						</div>
					</div>
				</div>
				<img src="https://s3.eu-west-2.amazonaws.com/lifeishappening/exampleTweet.png" className="examplePhoto animatedImg" alt=""/>
			</div>
		)
	}
}
export default Page1