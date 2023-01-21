import React, { Component } from "react";

import flecha from "@icons/flechita.svg";

import "@styles/Order.scss";

class Order extends Component {
  render() {
    return (
      <div className="Order">
        <p>
          <span>03.25.21</span>
          <span>6 articles</span>
        </p>
        <p>$560.00</p>
        <img src={flecha} alt="arrow" />
      </div>
    );
  }
}

export default Order;
