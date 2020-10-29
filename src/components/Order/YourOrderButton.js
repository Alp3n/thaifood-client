import React, { useContext } from 'react';
import { Box, Button, Stack, Text, ResponsiveContext } from 'grommet';
import { List } from 'grommet-icons';

const YourOrderButton = ({ orderCount, showSidebar, setShowSidebar }) => {
  const size = useContext(ResponsiveContext);
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
        {orderCount !== 0 ? (
          <Box
            background='#ff7e67'
            pad={
              size !== 'small'
                ? { horizontal: 'xsmall' }
                : { horizontal: 'small' }
            }
            round
          >
            <Text>{orderCount}</Text>
          </Box>
        ) : null}
      </Stack>
    </Box>
  );
};

export default YourOrderButton;
