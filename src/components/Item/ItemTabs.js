import React from 'react';
import { Tab, Tabs } from 'grommet';

import ItemGrid from './ItemGrid';
import YourOrderButton from '../Order/YourOrderButton';

const ItemTabs = ({
  orderCount,
  showSidebar,
  setShowSidebar,
  getValueFromForm,
}) => (
  <Tabs>
    <Tab title='Rice'>
      <ItemGrid type='rice' getValueFromForm={getValueFromForm} />
    </Tab>
    <Tab title='Noodles'>
      <ItemGrid type='noodles' getValueFromForm={getValueFromForm} />
    </Tab>
    <Tab title='Soups'>
      <ItemGrid type='soup' getValueFromForm={getValueFromForm} />
    </Tab>
    <Tab title='Drink'>
      <ItemGrid type='drink' getValueFromForm={getValueFromForm} />
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
