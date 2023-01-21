import React, { useContext } from "react";

import OrderItem from "@components/OrderItem";
import iconFlecha from "@icons/flechita.svg";
import AppContext from "@context/AppContext";

import "@styles/MyOrder.scss";

const MyOrder = () => {
  const {state} = useContext(AppContext);

  //Crear como hook para utilizar en diferentes componentes
  const sumCartTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={iconFlecha} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map(item => (
          <OrderItem product={item} key={`òrderItem-${item.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumCartTotal()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;


