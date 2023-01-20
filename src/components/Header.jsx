import React, { Component } from 'react';

import logo from "@logos/logo_yard_sale.svg";
import menuIcon from "@icons/icon_menu.svg";
import shoppinCart from "@icons/icon_shopping_cart.svg";

import '@styles/Header.scss'

class Header extends Component {
  render() {
    return (
      <nav>
        <img src={menuIcon} alt="menu" className="menu" />
        <div className="navbar-left">
          <img src={logo} alt="logo" className="nav-logo" />
          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furnitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li className="navbar-email">platzi@example.com</li>
            <li className="navbar-shopping-cart">
              <img src={shoppinCart} alt="shopping cart" />
              <div>2</div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;