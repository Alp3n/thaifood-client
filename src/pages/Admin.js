import React, { useState, useEffect } from 'react';
import { Box } from 'grommet';
import NavBar from '../components/nav/NavBar';

import UserService from '../services/user.service';

const Admin = () => {
  // const [content, setContent] = useState('');

  // useEffect(() => {
  //   UserService.getAdminBoard().then(
  //     (response) => {
  //       setContent(response.data);
  //     },
  //     (error) => {
  //       const _content =
  //         (error.response &&
  //           error.response.data &&
  //           error.response.data.message) ||
  //         error.message ||
  //         error.toString();

  //       setContent(_content);
  //     }
  //   );
  // }, []);

  return (
    <Box>
      <NavBar isAdmin={true} />
    </Box>
  );
};

export default Admin;
