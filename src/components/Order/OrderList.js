import React from 'react';
import { List, Button } from 'grommet';
import { Trash } from 'grommet-icons';

const OrderList = ({ value }) => {
  const data = [
    { en: 'Thai Basil, Chicken, Omlet, Not Spicy', th: 'ฟด่หกาสาสแๆไรๆ' },
    { en: 'Garlic, Chicken, Omlet, Not Spicy', th: 'ฟด่หกาสาสแๆไรๆ' },
    { en: '2x Water, Ice', th: 'นอากหกไๆ' },
  ];

  return (
    <List
      data={data.map((item) => item.en)}
      action={(index) => {
        return <Button key={index} icon={<Trash />} />;
      }}
    ></List>
  );
};

export default OrderList;
