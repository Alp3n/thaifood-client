import React from 'react';
import { Button, List } from 'grommet';
import { Trash } from 'grommet-icons';

const OrderListItem = ({ value }) => {
  const data = [
    'Thai Basil, Chicken, Omlet, Not Spicy',
    'Pad Thai, Shrimp',
    '2x Water, Ice',
  ];
  return (
    <List
      data={data}
      action={(item, index) => {
        return <Button key={index} icon={<Trash />} />;
      }}
    ></List>
  );
};

export default OrderListItem;
