import React, { useContext } from 'react';

import { Box, Text, ResponsiveContext } from 'grommet';
import NavBar from '../components/nav/NavBar';
import TopNavBar from '../components/nav/TopNavBar';
import BottomNavBar from '../components/nav/BottomNavBar';
const Guide = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Box fill background='accent-3'>
      {size !== 'small' ? (
        <NavBar />
      ) : (
        <TopNavBar>
          <Text size='large'>Guide</Text>
        </TopNavBar>
      )}
      <Box>
        <Text>Comming soon...</Text>
      </Box>
      {size === 'small' && (
        <Box align='center'>
          <BottomNavBar />
        </Box>
      )}
    </Box>
  );
};
export default Guide;
