import React, { useContext } from 'react';
import { Box, Button, Layer, Text } from 'grommet';
import { Close } from 'grommet-icons';
import OrderList from './OrderList';
import { OrderContext } from '../../contexts/OrderContext';

const OrderLayer = ({ showSidebar, setShowSidebar }) => {
  const { order } = useContext(OrderContext);
  return (
    <Layer
      open={showSidebar}
      onClickOutside={() => setShowSidebar(!showSidebar)}
    >
      <Box background='#eee' fill>
        <Box
          tag='header'
          direction='row'
          align='center'
          justify='between'
          background='brand'
          pad='small'
        >
          <Box pad='medium'>
            <Text size='large'>Your Order</Text>
          </Box>
          <Button
            icon={<Close color='status-critical' />}
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </Box>
        {/* <Box direction='row' gap='medium' pad='medium'>
            <Heading level={3} margin='none' pad='none'>
              {item.names.en}
            </Heading>
            <Text>{item.names.pron}</Text>
          </Box>
          <Button
            icon={<Close color='status-critical' />}
            onClick={onClose}
          />
        </Box> */}
        {order.length > 0 ? (
          <Box justify='between' fill>
            <OrderList />
            <Box
              direction='row'
              align='center'
              justify='around'
              pad='medium'
              elevation='upper'
              background='#eee'
            >
              <Button label='Reset' />
              <Button label='Translate' primary />
            </Box>
          </Box>
        ) : (
          <Box align='center' justify='center' margin={{ top: 'large' }}>
            <Text>Your order list is empty, add something</Text>
          </Box>
        )}
      </Box>
    </Layer>
  );
};

export default OrderLayer;
