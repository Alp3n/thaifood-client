import React from 'react';
import { Box, Button, Layer, Text } from 'grommet';
import { Close } from 'grommet-icons';
import OrderList from './OrderList';

const OrderLayer = ({ showSidebar, setShowSidebar }) => {
  const orderLength = 1;
  return (
    <Layer
      open={showSidebar}
      onClickOutside={() => setShowSidebar(!showSidebar)}
      position='bottom'
    >
      <Box background='#eee' fill justify='between'>
        <Box
          direction='row'
          pad='medium'
          justify='between'
          align='center'
          background='brand'
        >
          <Text size='large'>Your order</Text>
          <Button
            icon={<Close color='red' />}
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </Box>
        {orderLength > 0 ? (
          <OrderList />
        ) : (
          <Text>Your order list is empty, add something</Text>
        )}
        <Box direction='row' align='center' justify='around' pad='medium'>
          <Button label='Reset' />
          <Button label='Translate' primary />
        </Box>
      </Box>
    </Layer>
  );
};

export default OrderLayer;
