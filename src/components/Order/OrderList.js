import React, { useContext } from 'react';
import { List, Button } from 'grommet';
import { Trash } from 'grommet-icons';

import { OrderContext } from '../../contexts/OrderContext';

const OrderList = () => {
  const { order, removeFromOrder } = useContext(OrderContext);
  // const data = [
  //   { en: 'Thai Basil, Chicken, Omlet, Not Spicy', th: 'ฟด่หกาสาสแๆไรๆ' },
  //   { en: 'Garlic, Chicken, Omlet, Not Spicy', th: 'ฟด่หกาสาสแๆไรๆ' },
  //   { en: '2x Water, Ice', th: 'นอากหกไๆ' },
  // ];

  return (
    <List
      data={order.map((item) => `${item.name}, ${item.meat}, ${item.spicy}`)}
      action={(item, index) => {
        return (
          <Button
            key={index}
            icon={<Trash />}
            onClick={() => removeFromOrder(index)}
          />
        );
      }}
    ></List>
  );
};

export default OrderList;
