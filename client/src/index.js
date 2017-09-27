import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers/index';

require('./sass/styles.sass');

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
  	<BrowserRouter>
   		<div>
   			<Route path="/" component={App} />
   		</div>
   	</BrowserRouter>
  </Provider>,
  document.querySelector('#main')
);

