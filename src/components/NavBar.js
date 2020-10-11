import React from 'react';
import { Box, Button, Nav, Text } from 'grommet';
import { Cafeteria } from 'grommet-icons';
import { Link } from 'react-router-dom';

const NavBar = (props) => (
  <Nav
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    style={{ zIndex: '1' }}
  >
    <Box>
      <Link to='/'>
        <Button plain icon={<Cafeteria />} color='white' label='ThaiFood' />
      </Link>
    </Box>
    <Box
      direction='row'
      align='center'
      gap='medium'
      margin={{ right: 'medium' }}
    >
      <Link to='/'>
        <Button plain color='white' label='Home' />
      </Link>
      <Link to='/about'>
        <Button plain color='white' label='About' />
      </Link>
      <Link to='/signin'>
        <Button primary color='white' label='Sign In' />
      </Link>
      <Link to='/signup'>
        <Button plain color='white' label='Sign Up' />
      </Link>
    </Box>
  </Nav>
);

export default NavBar;
