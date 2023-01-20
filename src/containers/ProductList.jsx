import React, { useState, useEffect } from "react";
import axios from 'axios';

import ProductItem from "@components/ProductItem";

import "@styles/ProductList.scss";

const API = process.env.API;

const ProductList = () => {
  const [products, setProducts] = useState([]);


  const fetchData = async () => {
    const response = await axios(`${API}/products`);
    setProducts(response.data);
    console.log("Loaded")
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map(product => {
          return <ProductItem />
        })}
      </div>
    </section>
  );
};

export default ProductList;
