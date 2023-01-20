import React, { Component } from "react";

import addCart from "@icons/bt_add_to_cart.svg";

import "@styles/ProductItem.scss";

class ProductItem extends Component {
  render() {
    return (
      <div className="ProductItem">
        <img
          src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <div className="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src={addCart} alt="" />
          </figure>
        </div>
      </div>
    );
  }
}

export default ProductItem;
