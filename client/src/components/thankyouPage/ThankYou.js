import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopLine from 'svg-react-loader?name=Icon!../../svg/topLine.svg';
import TLPhone from 'svg-react-loader?name=Icon!../../svg/glitchTLPhone.svg';
import PaymentIcon from 'svg-react-loader?name=Icon!../../svg/paymentIcon.svg';

class ThankYou extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {brand, date, last4, price, size} = this.props.pInfoReducer.pInfo;
		return (
			<div className="thankYouPageBackground">
				<div className="thankYouBackground">
					<TopLine className='topLine' />
					<TLPhone className='tlPhone' />
					<div className="section1">
						<div className="section1Text">
							<div className="thankYouBook">You just bought</div>
							<div className="oneFortyCanvasText thankYouRounded bigScreenThankYou">A custom canvas from 140 Canvas</div>
							<div className="oneFortyCanvasText thankYouRounded smallScreenThankYou">A custom canvas</div>
							<div className="thankYouBook">{size}</div>
						</div>
						<PaymentIcon className='paymentIcon' />
					</div>
					<div className="section2">
						<div className="section2a margin2a">
							<div className="thankYouRounded visa">{brand}</div>
							<div className="thankYouRounded visa">£{price}</div>
						</div>
						<div className="section2a">
							<div className="dots">
								<div className="first12">.... .... ....</div>
								<div className="last4">{last4}</div>
							</div>
							<div className="thankYouBook">{date}</div>
						</div>
					</div>
					<div className="section3">
						<div className="thankYouRounded thankYouCTA">
							When your canvas arrives send a tweet with a photo to <span className="blueThankYouCTA">@140_Canvas</span> and we’ll send a box of chocolates to your address<span className="blueThankYouCTA"></span> 💝
						</div>
					</div>
					<div className="section4">
						<div className="thankYouBook thankYouCTA extraWidth">
							We’ve sent confirmation of your order via email. If nothing arrives please check your junk mail.
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ pInfoReducer }) {
  return {pInfoReducer };
}

export default connect(mapStateToProps)(ThankYou);