import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Checkout,
  Payment,
  Home,
  Success,
  Notfound,
  Information,
} from '../containers';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/checkout/information" component={Information} />
        <Route exact path="/checkout/payment" component={Payment} />
        <Route exact path="/checkout/success" component={Success} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
