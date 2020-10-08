import React from 'react';
import { Box, Collapsible, Text } from 'grommet';

const OrderSidebar = (props, { showSidebar }) => {
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
        <Text>Your order list</Text>
      </Box>
    </Collapsible>
  );
};

export default OrderSidebar;
