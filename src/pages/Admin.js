import React from 'react';
import { Box } from 'grommet';
import NavBar from '../components/nav/NavBar';

const Admin = () => {
  return (
    <Box>
      <NavBar isAdmin={true} />
    </Box>
  );
};

export default Admin;
