import React, { useContext } from 'react';

import { Box, Grid, InfiniteScroll, Text, ResponsiveContext } from 'grommet';

import NavBar from '../components/nav/NavBar';
import TopNavBar from '../components/nav/TopNavBar';
import BottomNavBar from '../components/nav/BottomNavBar';
import FavoriteCard from '../components/favorite/FavoriteCard';

const favData = [
  {
    id: 1,
    title: 'Fourth fav',
    items: [
      {
        en: 'Something',
        th: '่กสฟหากีร',
      },
      {
        en: 'Something 2',
        th: '่กสฟหากีร',
      },
      {
        en: 'Something 3',
        th: '่กสฟหากีร',
      },
    ],
  },
  {
    id: 2,
    title: 'Second fav',
    items: [
      {
        en: 'Something',
        th: '่กสฟหากีร',
      },
      {
        en: 'Something',
        th: '่กสฟหากีร',
      },
    ],
  },
  {
    id: 3,
    title: 'Third fav',
    items: [
      {
        en: 'Something',
        th: '่กสฟหากีร',
      },
    ],
  },
  {
    id: 4,
    title: 'Fourth fav',
    items: [
      {
        en: 'Something',
        th: '่กสฟหากีร',
      },
      {
        en: 'Something 2',
        th: '่กสฟหากีร',
      },
      {
        en: 'Something 3',
        th: '่กสฟหากีร',
      },
    ],
  },
  {
    id: 5,
    title: 'Fifth fav',
    items: [
      {
        en: 'Something',
        th: '่กสฟหากีร',
      },
      {
        en: 'Something 2',
        th: '่กสฟหากีร',
      },
      {
        en: 'Something 3',
        th: '่กสฟหากีร',
      },
      {
        en: 'Something 2',
        th: '่กสฟหากีร',
      },
      {
        en: 'Something 3',
        th: '่กสฟหากีร',
      },
    ],
  },
  {
    id: 6,
    title: 'Third fav',
    items: [
      {
        en: 'Something',
        th: '่กสฟหากีร',
      },
    ],
  },
];

const Favorites = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Box fill background='accent-3'>
      {size !== 'small' ? (
        <NavBar />
      ) : (
        <TopNavBar>
          <Text size='large'>Favorites</Text>
        </TopNavBar>
      )}
      <Box
        fill
        overflow='auto'
        // margin={size === 'small' ? { bottom: 'xlarge' } : undefined}
      >
        <Grid
          justifyContent={size === 'small' ? 'center' : 'between'}
          gap={size !== 'small' ? 'medium' : 'small'}
          // rows={size !== 'small' ? 'medium' : 'small'}
          columns={{ count: 'fill', size: ['small', 'medium'] }}
          pad='large'
          margin={
            size === 'small' ? { top: 'none', bottom: 'xlarge' } : undefined
          }
        >
          <InfiniteScroll items={favData.map((favorite) => favorite)}>
            {(favorite) =>
              FavoriteCard({
                favorite,
                // onOpen
              })
            }
          </InfiniteScroll>
        </Grid>
        {/* <ItemForm item={selectedItem} open={open} onClose={onClose} /> */}
      </Box>
      {size === 'small' && (
        <Box align='center'>
          <BottomNavBar />
        </Box>
      )}
    </Box>
  );
};

export default Favorites;
