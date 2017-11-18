import React from 'react';
import Twitter from 'svg-react-loader?name=Icon!../../../svg/twitter.svg';

const Footer = () => (
  <div className="footerSection">
    <div className="footerFont copyright">© 140 Canvas</div>
    <div className="footerFont anyQuestions">
      Any Questions? Say{' '}
      <span role="img" aria-label="Wave">
        👋
      </span>{' '}
      at{' '}
      <span className="emailHandle">
        <a
          target="_blank "
          rel="noopener noreferrer"
          className="animationLine"
          href="mailto:team@140canvas.com"
        >
          team@140canvas.com
        </a>
      </span>
    </div>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/140_Canvas"
      className="twitterLeft"
    >
      <Twitter className="twitter" />
    </a>
  </div>
);

export default Footer;
