import React, { Component } from 'react';
import ProductList from '@containers/ProductList';

class Home extends Component {
  render() {
    return (
      <>
			  <ProductList />
		  </>
    );
  }
}

export default Home;