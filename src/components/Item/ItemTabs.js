import React from 'react';
import { Box, Tab, Tabs } from 'grommet';

import ItemGrid from './ItemGrid';
import YourOrderButton from '../Order/YourOrderButton';

const ItemTabs = ({orderCount, showSidebar ,setShowSidebar}) => (
  <Tabs>
    <Tab title='Rice'>
        <ItemGrid type='rice' />
    </Tab>
    <Tab title='Noodles'>
        <ItemGrid type='noodle'/>
    </Tab>
    <Tab title='Soups'>
        <ItemGrid type='soup'/>
    </Tab>
    <Tab title='Drinks'>
        <ItemGrid type='drink'/>
    </Tab>
    <YourOrderButton
              margin-left='small'
              orderCount={orderCount}
              setShowSidebar={setShowSidebar}
              showSidebar={showSidebar}
            />
  </Tabs>
);

export default ItemTabs;
