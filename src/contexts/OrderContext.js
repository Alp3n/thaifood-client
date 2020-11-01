import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

const OrderContextProvider = (props) => {
  const [order, setOrder] = useState([]);

  const addToOrder = (item) => {
    setOrder((order) => [...order, item]);
    console.log(item);
  };

  const removeFromOrder = (index) => {
    setOrder(order.filter((_, i) => i !== index));
  };

  const clearOrder = () => {
    setOrder([]);
  };

  return (
    <OrderContext.Provider
      value={{ order, addToOrder, removeFromOrder, clearOrder }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
