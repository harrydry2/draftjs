import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './mainPage/MainPage';
import ThankYou from './thankyouPage/ThankYou';

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/thankyou" component={ThankYou} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
