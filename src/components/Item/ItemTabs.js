import React from 'react';
import { Box, Tab, Tabs } from 'grommet';

import ItemGrid from './ItemGrid';
import YourOrderButton from '../Order/YourOrderButton';

const ItemTabs = () => (
  <Tabs>
    <Tab title='Rice'>
      <Box direction='row' fill flex pad='large'>
        <ItemGrid />
      </Box>
    </Tab>
    <Tab title='Noodles'>
      <Box fill pad='large'>
        <ItemGrid />
      </Box>
    </Tab>
    <Tab title='Soups'>
      <Box fill pad='large'>
        <ItemGrid />
      </Box>
    </Tab>
    <Tab title='Drinks'>
      <Box fill pad='large'>
        <ItemGrid />
      </Box>
    </Tab>
  </Tabs>
);

export default ItemTabs;
