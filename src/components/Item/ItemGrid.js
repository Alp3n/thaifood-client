import React from 'react';
import { Box, Grid, InfiniteScroll } from 'grommet';
import ItemCard from './ItemCard';

import data from '../../data';



const ItemGrid = ({type}) => {

  const filteredData = data.filter(item => item.type === `${type}` )

  return (
  <Box fill flex pad='large' align='justify'>
    <Grid
      gap='xlarge'
      rows='medium'
      columns={{ count: 'fit', size: ['medium', 'medium'] }}
    >
      <InfiniteScroll items={filteredData}>
        {(item) => ItemCard({ item })}
      </InfiniteScroll>
    </Grid>
  </Box>
);
}
export default ItemGrid;
