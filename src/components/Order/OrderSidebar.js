import React from 'react';
import { Box, Collapsible, Text } from 'grommet';
import OrderList from './OrderList';

const OrderSidebar = ({ showSidebar }) => {
  const orderLength = 1;
  return (
    <Collapsible direction='horizontal' open={showSidebar}>
      <Box
        flex
        width='medium'
        background='accent-3'
        elevation='small'
        align='center'
        justify='center'
      >
        {orderLength > 0 ? <OrderList /> : <Text>Your order list</Text>}
      </Box>
    </Collapsible>
  );
};

export default OrderSidebar;
