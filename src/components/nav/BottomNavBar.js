import React from 'react';
import styled from 'styled-components';
import { Box } from 'grommet';
import { Favorite, Home, Book } from 'grommet-icons';
import { Link } from 'react-router-dom';

const StyledNavBar = styled(Box)`
  overflow: hidden;
  position: fixed;
  bottom: 0;
  height: auto;
  width: 100%;
`;

const IconButton = ({ icon, onClick, route }) => {
  return (
    <Link to={route}>
      <Box
        direction='column'
        justify='center'
        align='center'
        onClick={onClick}
        pad='small'
      >
        {icon}
      </Box>
    </Link>
  );
};

const buttons = [
  { route: '/', icon: <Home size='medium' />, label: 'Home' },
  { route: '/favorites', icon: <Favorite size='medium' />, label: 'Favorite' },
  { route: '/guide', icon: <Book size='medium' />, label: 'Guide' },
];

// const handleClick = (setColor) => {
//   alert('Hello');
// };

const BottomNavBar = () => {
  return (
    <StyledNavBar pad='small' background='brand' elevation='upper'>
      <Box direction='row' justify='evenly' align='center'>
        {buttons.map((button, index) => (
          <IconButton
            key={index}
            route={button.route}
            icon={button.icon}
            // label={button.label}
            // onClick={handleClick}
          />
        ))}
      </Box>
    </StyledNavBar>
  );
};

export default BottomNavBar;
