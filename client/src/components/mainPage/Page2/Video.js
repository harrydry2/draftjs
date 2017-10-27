import React, { Component } from 'react';

class Video extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: undefined,
		}
	}
	imgLoaded(e){
		console.log('imgLoadedFired')
		this.setState({isLoading: true})
	}


	// timeout currently uncleared
	componentWillUpdate() {
		if ((this.video.currentTime === 0 && this.video.getBoundingClientRect().top + 100 - window.innerHeight) < 0) {
			this.timeout = setTimeout(() => {
				this.video.play();
				this.setState({isLoading: false})
			},1200)
		}
	}

	// <div className={`videoWrapper ${isLoading ? 'isLoading' : ''}`}>
	// 	<img src="https://s3.eu-west-2.amazonaws.com/lifeishappening/latestMacbookTrans.png" onLoad={(e) => this.imgLoaded(e)} className="macBook"/>
	// <div className="lds-css ng-scope positionSpinner">
	// 				<div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
				// <div className="videoWrapper">
				// </div>
	render() {
		return (
				<video 
					src="https://s3.eu-west-2.amazonaws.com/lifeishappening/fuckingEndItCompressed.mp4"  
					muted playsInline loop className="federerVideo"
					ref={(element) => { this.video = element; }}
					onClick={(e) => this.video.paused ? this.video.play() : this.video.pause()} 
				/>
		);
	}
}

export default Video