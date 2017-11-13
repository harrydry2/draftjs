import React, { Component } from 'react';

class Video extends Component {
  // timeout currently uncleared
  componentWillUpdate() {
    if (
      (this.video.currentTime === 0 &&
        this.video.getBoundingClientRect().top + 100 - window.innerHeight) < 0
    ) {
      this.timeout = setTimeout(() => {
        this.video.play();
      }, 1200);
    }
  }
  render() {
    return (
      <video
        source
        src="https://s3.eu-west-2.amazonaws.com/lifeishappening/promVideo.mp4"
        type="video/mp4"
        muted
        playsInline
        loop
        className="federerVideo"
        poster="https://s3.eu-west-2.amazonaws.com/lifeishappening/draftPoster.jpg"
        ref={(element) => {
          this.video = element;
        }}
        onClick={() => (this.video.paused ? this.video.play() : this.video.pause())}
      />
    );
  }
}

export default Video;
