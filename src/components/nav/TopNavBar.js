import React from 'react';
import { Box, Menu } from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';

const menuItems = [
  {
    label: 'Sign In',
    onClick: () => {
      alert('Menu1');
    },
  },
  {
    label: 'Sign Up',
    onClick: () => {
      alert('Menu2');
    },
  },
];

const TopNavBar = (props) => {
  return (
    <Box
      align='center'
      background='brand'
      direction='row'
      pad='small'
      gap='medium'
    >
      <Menu
        dropProps={{ align: { top: 'bottom', left: 'left' } }}
        items={menuItems.map((item) => item)}
        icon={<MenuIcon />}
      />
      <Box fill='horizontal' pad={{ right: 'medium' }}>
        {props.children}
      </Box>
    </Box>
  );
};

export default TopNavBar;
