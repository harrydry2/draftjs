import React, { Component } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

class Video extends Component {
	constructor() {
    super();
		this.onEnterViewport = this.onEnterViewport.bind(this);
    this.onExitViewport = this.onExitViewport.bind(this);		
  }
  // timeout currently uncleared

  // componentDidUpdate() {
  //   if (
  //     (this.video.currentTime === 0 &&
  //       this.video.getBoundingClientRect().top + 100 - window.innerHeight) < 0
  //   ) {
  //     this.timeout = setTimeout(() => {
  //       this.video.play();
  //     }, 1200);
  //   }
  // }

  onEnterViewport() {
    this.timeout = setTimeout(() => {
    	this.video.play();
    }, 1200);
  }

  onExitViewport() {
    this.video.pause();
  }

  render() {
    return (
      <ScrollTrigger onEnter={this.onEnterViewport} onExit={this.onExitViewport}>
        <video
          src="./promVideo.mp4"
          type="video/mp4"
          playsInline
          loop
          preload="auto"
          className="federerVideo"
          poster="https://s3.eu-west-2.amazonaws.com/lifeishappening/draftPoster.jpg"
          ref={(element) => {
            this.video = element;
          }}
          onClick={() => (this.video.paused ? this.video.play() : this.video.pause())}
        />
      </ScrollTrigger>
    );
  }
}

export default Video;
