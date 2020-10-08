import React from 'react';
import { Box, Button, Stack, Text } from 'grommet';
import { List } from 'grommet-icons';

const YourOrderButton = (props, { showSidebar, setShowSidebar }) => {
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
        <Box background='#ff7e67' pad={{ horizontal: 'xsmall' }} round>
          <Text>{props.orderCount}</Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default YourOrderButton;
