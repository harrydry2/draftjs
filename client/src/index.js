import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';


require('./sass/styles.sass');

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route path="/" component={App} />
		</div>
	</BrowserRouter>
  , document.querySelector('#main'));

