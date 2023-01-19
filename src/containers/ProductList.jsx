import React, { Component } from "react";
import ProductItem from "@components/ProductItem";
import "@styles/ProductList.scss";

class ProductList extends Component {
  render() {
    return (
      <section className="main-container">
        <div className="ProductList">
          <ProductItem />
        </div>
      </section>
    );
  }
}

export default ProductList;
