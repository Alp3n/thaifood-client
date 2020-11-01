import React, { useContext } from 'react';
import { Box, Button, Collapsible, Text } from 'grommet';
import OrderList from './OrderList';
import { OrderContext } from '../../contexts/OrderContext';

const OrderSidebar = ({ showSidebar }) => {
  const { order, clearOrder } = useContext(OrderContext);
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
        {order.length > 0 ? (
          <Box>
            <OrderList />
            <Box direction='row' align='center' justify='between' pad='medium'>
              <Button label='Clear' onClick={() => clearOrder()} />
              <Button label='Translate' primary />
            </Box>
          </Box>
        ) : (
          <Box align='center'>
            <Text>Your order list is empty, add something</Text>
          </Box>
        )}
      </Box>
    </Collapsible>
  );
};

export default OrderSidebar;
