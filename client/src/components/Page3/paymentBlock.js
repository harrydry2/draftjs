import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import format from 'date-fns/format'

class PaymentBlock extends Component {
	async handleToken(token, address){
		const {username} = this.props.infoObject;
		const {dateAndTime, editorState} = this.props.textReducer;
		const {insideRetweets, insideLikes, favouritesArray} = this.props.statsReducer;
		const {insideReplies} = this.props.footerReducer;
		const eachFavourite = favouritesArray.map((favourite) => favourite[1]);
		const timeOfPurchase = format(new Date(),'h:mm A - D MMM YYYY');
		const emailDate = format(new Date(),'MM/DD/YYYY');
		// manipulating price
		const {size, price} = this.props.sizeReducer;
		const emailPrice = `${price}.00`
		const stripePrice = parseFloat(`${price}00`)
		const toPost = {
			username,
			tweetDate: dateAndTime,
			tweetText: editorState,
			retweets: insideRetweets,
			favourites: insideLikes,
			favouritesArray: eachFavourite,
			replies: insideReplies,
			id: token.id,
			stripeEmail: token.email,
			stripeBillingName: address.billing_name,
			stripeBillingAddressCountry: address.billing_address_country,
			stripeBillingAddressZip: address.billing_address_zip,
			stripeBillingAddressLine1: address.billing_address_line1,
			stripeBillingAddressCity: address.billing_address_city,
			stripeBillingAddressState: address.billing_address_state,
			stripeShippingName: address.shipping_name,
			stripeShippingAddressCountry: address.shipping_address_country,
			stripeShippingAddressZip: address.shipping_address_zip,
			stripeShippingAddressLine1: address.shipping_address_line1,
			stripeShippingAddressCity: address.shipping_address_city,
			stripeShippingAddressState: address.shipping_address_state,
			timeOfPurchase,
			emailDate,
			size,
			emailPrice,
			stripePrice,
		}
  	const res = await axios.post('/api/stripe', toPost);
	}

	render() {
		const {price} = this.props.sizeReducer;
		const stripePrice = parseFloat(`${price}00`);
		return (
			<StripeCheckout
			  name="140 Canvas"
			  image="https://stripe.com/img/documentation/checkout/marketplace.png"
			  currency="GBP"
			  shippingAddress
			  billingAdress={true}
			  amount={stripePrice}
			  token={(token, address) => this.handleToken(token, address)}
			  stripeKey="pk_test_9gCdD2DfM1XFS6Tdo6mtL4zq"
			>
			  <button className="paymentButton">
			    Buy Now
			  </button>
			</StripeCheckout>
		);
	}
}

function mapStateToProps({ infoObject, textReducer, statsReducer, footerReducer, sizeReducer }) {
  return { infoObject, textReducer, statsReducer, footerReducer, sizeReducer };
}

export default connect(mapStateToProps)(PaymentBlock);