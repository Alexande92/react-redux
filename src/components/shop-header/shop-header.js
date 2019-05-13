import React from 'react';
import './shop-header.css'
import { Link } from 'react-router-dom';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">ReStore</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart">
            &nbsp;{numItems} items (${total})
          </i>
        </div>
      </Link>
    </header>
  );
};


export default ShopHeader;