import React, { Component } from 'react';

class Video extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: undefined,
		}
	}
	imgLoaded(e){
		this.setState({isLoading: true})
	}

	vidLoaded(e){
		setTimeout(() => {
			this.video.play();
			this.setState({isLoading: false})
		}, 1000)
	}

	render() {
		const {isLoading} = this.state
		return (
			<div className={`videoWrapper ${isLoading ? 'isLoading' : ''}`}>
				<img src="https://s3.eu-west-2.amazonaws.com/lifeishappening/latestMacbookTrans.png" onLoad={(e) => this.imgLoaded(e)} className="macBook"/>
				<video 
					src="https://s3.eu-west-2.amazonaws.com/lifeishappening/obama.mp4" 
					onCanPlayThrough={(e) => this.vidLoaded(e)} 
					muted playsInline loop className="obamaVideo"
					ref={(element) => { this.video = element; }}
					onClick={(e) => this.video.paused ? this.video.play() : this.video.pause()} 
				/>
				<div className="lds-css ng-scope positionSpinner">
				<div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
			</div>
		);
	}
}

export default Video