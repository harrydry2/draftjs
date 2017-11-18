import React, { Component } from 'react';
import Scroll from 'react-scroll';

const scroll = Scroll.animateScroll;

class Page1 extends Component {
  scrollDown() {
    scroll.scrollToBottom({
      duration: 1500,
      smooth: 'easeOutQuad',
    });
  }

  render() {
    return (
      <div className="page1Wrapper">
        <div className="P1WrapperBackground" />
        <img
          src="https://s3.eu-west-2.amazonaws.com/lifeishappening/TCLogo.png"
          className="canvasLogo"
          alt=""
        />
        <div className="bodyContainer">
          <div className="headerText gothamRM animatedHeader">
            Turn Custom Tweets into Canvas Prints
          </div>
          <div className="bodyText gothamBook animatedBody">
            <div className="underpants">Tired of buying underpants?</div>Give a unique gift this
            Christmas.<br /> Order your custom canvas before the 15th December for free UK delivery
            🎁
          </div>
          <div className="animatedBody">
            <div className="ctaSectionGlitch" onClick={e => this.scrollDown(e)}>
              <div className="ctaMoney">£24</div>
              <div className="boldBookWrapper">
                <div className="ctaBold">Make Your Canvas</div>
                <div className="ctaBook">Order now for free shipping</div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://s3.eu-west-2.amazonaws.com/lifeishappening/compressedchrisPhoto2000.png"
          className="examplePhoto animatedImg"
          alt=""
        />
      </div>
    );
  }
}

export default Page1;
