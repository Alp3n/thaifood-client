import React from 'react';
import { Box, Grid, InfiniteScroll } from 'grommet';
import ItemCard from './ItemCard';

import data from '../../data';

const ItemGrid = () => (
  <Box fill flex pad='medium' align='justify'>
    <Grid
      gap='large'
      rows='medium'
      columns={{ count: 'fit', size: ['medium', 'medium'] }}
    >
      <InfiniteScroll items={data}>
        {(item) => ItemCard({ item })}
      </InfiniteScroll>
    </Grid>
  </Box>
);

export default ItemGrid;
