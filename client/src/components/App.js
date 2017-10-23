import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './mainPage/MainPage';
import ThankYou from './thankyouPage/ThankYou';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Route path="/" component={MainPage} />
						<Route path="/thankyou" component={ThankYou} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;