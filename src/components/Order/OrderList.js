import React from 'react';
import { Box, Button } from 'grommet';
import OrderListItem from './OrderListItem';

const OrderList = ({ value }) => {
  return (
    <Box>
      <OrderListItem />
      <Box direction='row' align='center' justify='around' margin='medium'>
        <Button label='Reset' />
        <Button label='Translate' primary />
      </Box>
    </Box>
  );
};

export default OrderList;
