import React from 'react';
import { Tab, Tabs } from 'grommet';

import ItemGrid from './ItemGrid';
import YourOrderButton from '../order/YourOrderButton';

const ItemTabs = ({ showSidebar, setShowSidebar }) => (
  <Tabs overflow='auto'>
    <Tab title='Rice'>
      <ItemGrid type='rice' />
    </Tab>
    <Tab title='Noodles'>
      <ItemGrid type='noodles' />
    </Tab>
    <Tab title='Soups'>
      <ItemGrid type='soup' />
    </Tab>
    <Tab title='Drink'>
      <ItemGrid type='drink' />
    </Tab>
    <YourOrderButton
      orderCount={3}
      setShowSidebar={setShowSidebar}
      showSidebar={showSidebar}
    />
  </Tabs>
);

export default ItemTabs;
