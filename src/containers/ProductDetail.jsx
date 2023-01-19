import React, { Component } from "react";
import ProductInfo from "@components/ProductInfo";
import "@styles/ProductDetail.scss";

class ProductDetail extends Component {
  render() {
    return (
      <aside className="ProductDetail">
        <div className="ProductDetail-close">
          <img src="./icons/icon_close.png" alt="close" />
        </div>
        <ProductInfo />
      </aside>
    );
  }
}

export default ProductDetail;
