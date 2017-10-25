import React, { Component } from 'react';
import classNames from 'classnames';
import P1WrapperBackground from 'svg-react-loader?name=Icon!../../../svg/backgroundP1.svg';
import P1WrapperBackgroundTablet from 'svg-react-loader?name=Icon!../../../svg/backgroundP1Tablet.svg';
import P1WrapperBackgroundTabletSmaller from 'svg-react-loader?name=Icon!../../../svg/backgroundP1TabletSmaller.svg';
import P1WrapperBackgroundPhone from 'svg-react-loader?name=Icon!../../../svg/backgroundP1Phone.svg';

class Page1 extends Component {
	constructor(props) {
		super(props);
		this.handleScroll = this.handleScroll.bind(this);
		this.state = {
			animatedHeader: true,
			animatedBody: true,
			animatedImg: true,
		}
	}

	componentDidMount() {
	  window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
		if (window.scrollY > window.innerHeight) {
			this.setState({
				animatedHeader: false,
				animatedBody: false,
				animatedImg: false,
			})
		} else {
			this.setState({
				animatedHeader: true,
				animatedBody: true,
				animatedImg: true,
			})
		}
	}

	render() {
		const headerText = classNames({
			headerText: true,
			gothamRM: true,
			animatedHeader: this.state.animatedHeader,
		})
		const bodyText = classNames({
			bodyText: true,
			gothamBook: true,
			animatedBody: this.state.animatedBody,
		})
		const ctaSection = classNames({
			animatedBody: this.state.animatedBody,
		})
		const examplePhoto = classNames({
			examplePhoto: true,
			animatedImg: this.state.animatedImg,
		})
		return (
			<div className="page1Wrapper">
				<P1WrapperBackground className='P1WrapperBackground' />
				<P1WrapperBackgroundTablet className='P1WrapperBackgroundTablet' />
				<P1WrapperBackgroundTabletSmaller className='P1WrapperBackgroundTabletSmaller' />
				<P1WrapperBackgroundPhone className='P1WrapperBackgroundPhone' />
				<img src="https://s3.eu-west-2.amazonaws.com/lifeishappening/finalLogoUnlessCompress.png" className="canvasLogo" alt=""/>
				<div className="bodyContainer">
					<div className={headerText}>Turn Custom Tweets into Canvas Prints</div>
					<div className={bodyText}>We create Twitter style canvases from whoever, for whoever. Pick your tweet, sender, favourites and retweets and we’ll do the rest!</div>
					<div className={ctaSection}>
						<div className="ctaSectionGlitch">
							<div className="ctaMoney">£24</div>
							<div className="boldBookWrapper">
								<div className="ctaBold">Make Your Canvas</div>
								<div className="ctaBook">Order now for free shipping</div>
							</div>
						</div>
					</div>
				</div>
				<img src="https://s3.eu-west-2.amazonaws.com/lifeishappening/exampleTweet.png" className={examplePhoto} alt=""/>
			</div>
		)
	}
}
export default Page1