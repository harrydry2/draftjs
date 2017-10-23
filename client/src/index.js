import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Checkout from './components/ThankYou';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers/index';
require('./sass/styles.sass');

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const Dashboard = () => <h2> Dashboard </h2>

ReactDOM.render(
  <Provider store={store}>
  	<BrowserRouter>
   		<div>
   			<Route exact path="/" component={App}/>
   			<Route exact path="/checkout" component={Checkout} />
   		</div>
   	</BrowserRouter>
  </Provider>,
  document.querySelector('#main')
);