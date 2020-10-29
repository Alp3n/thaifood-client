import React from 'react';
import { Box, Text } from 'grommet';
import NavBar from '../components/nav/NavBar';
const About = () => {
  return (
    <Box fill>
      <NavBar />
      <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
        <Box flex='grow' background='#eee' overflow={{ horizontal: 'hidden' }}>
          <Text>About</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
