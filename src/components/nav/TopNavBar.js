import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Menu } from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';

// const MenuItem = (label, route) => {
//   <Link to={route}>
//     <Button plain label={label} />
//   </Link>;
// };

const menuItems = [
  {
    label: 'About',
    onClick: () => <Link to='/about' />,
  },
  {
    label: 'Sign In',
    onClick: () => <Link to='/sign-in' />,
  },
  {
    label: 'Sign Up',
    onClick: () => <Link to='/sign-up' />,
  },

  // <MenuItem label='About' route='/about' />,
  // <MenuItem label='Sign In' route='/sign-in' />,
  // <MenuItem label='Sign Up' route='/sign-up' />,
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
      <Box fill='horizontal' pad='medium'>
        {props.children}
      </Box>
    </Box>
  );
};

export default TopNavBar;
