import React, { Component } from "react";
import '@styles/Menu.scss';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <ul>
          <li>
            <a href="/" className="title">My orders</a>
          </li>
          <li>
            <a href="/">My account</a>
          </li>
          <li>
            <a href="/">Sign out</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
