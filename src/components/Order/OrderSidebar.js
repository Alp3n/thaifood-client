import React from 'react';
import { Box, Button, Collapsible, Text } from 'grommet';
import OrderList from './OrderList';

const OrderSidebar = ({ showSidebar }) => {
  const orderLength = 1;
  return (
    <Collapsible direction='horizontal' open={showSidebar}>
      <Box
        flex
        width='medium'
        background='#eee'
        // elevation='none'
        border='left'
        justify='center'
      >
        {orderLength > 0 ? (
          <OrderList />
        ) : (
          <Text>Your order list is empty, add something</Text>
        )}
        <Box direction='row' align='center' justify='between' pad='medium'>
          <Button label='Reset' />
          <Button label='Translate' primary />
        </Box>
      </Box>
    </Collapsible>
  );
};

export default OrderSidebar;
