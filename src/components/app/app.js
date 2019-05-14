import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import ShopHeader from '../shop-header';
import { connect } from 'react-redux';

import './app.css';

const App = (props) => {
  const { numItems, total } = props;
  return (
    <main role="main" className="container">
      <ShopHeader numItems={numItems} total={total}/>
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact
        />

        <Route
          path="/cart"
          component={CartPage}
        />
      </Switch>
    </main>
  );
};

const mapStateToProps = ({ shoppingCart: { items, orderTotal }}) => {

  return {
    numItems: items,
    total: orderTotal
  }
};


export default connect(mapStateToProps)(App);