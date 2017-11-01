import React, { Component } from 'react';

class Page1 extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="page1Wrapper">
				<div className="P1WrapperBackground" />
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