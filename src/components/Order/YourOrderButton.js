import React, { useContext } from 'react';
import { Box, Button, Stack, Text, ResponsiveContext } from 'grommet';
import { List } from 'grommet-icons';
import { OrderContext } from '../../contexts/OrderContext';

const YourOrderButton = ({ showSidebar, setShowSidebar }) => {
  const size = useContext(ResponsiveContext);

  const { order } = useContext(OrderContext);
  return (
    <Box pad='small'>
      <Stack anchor='bottom-right'>
        <Button
          primary
          size='large'
          label='Your order'
          icon={<List />}
          onClick={() => setShowSidebar(!showSidebar)}
        />
        {order.length > 0 ? (
          <Box
            background='#ff7e67'
            pad={
              size !== 'small'
                ? { horizontal: 'xsmall' }
                : { horizontal: 'small' }
            }
            round
          >
            <Text>{order.length}</Text>
          </Box>
        ) : null}
      </Stack>
    </Box>
  );
};

export default YourOrderButton;
