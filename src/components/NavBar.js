import React from 'react';
import { Anchor, Box, Button, Heading, Nav, Text } from 'grommet';

const NavBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    style={{ zIndex: '1' }}
  >
    <Heading level='3' margin='none' size='small'>
      ThaiFooood
    </Heading>
    <Nav direction='row' align='center' {...props} />
  </Box>
);

export default NavBar;
