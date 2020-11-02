import React, { useState, useRef, useContext } from 'react';
import { Box, ResponsiveContext, Text } from 'grommet';
import NavBar from '../components/nav/NavBar';
import TopNavBar from '../components/nav/TopNavBar';
import SignBox from '../components/sign/SignBox';
import AuthService from '../services/auth.service';

//TODO JWT AUTH

const SignIn = (props) => {
  const size = useContext(ResponsiveContext);

  return (
    <Box fill background='accent-3'>
      {size !== 'small' ? <NavBar /> : <TopNavBar />}
      <Box
        direction='row'
        flex
        overflow={{ horizontal: 'hidden' }}
        align='center'
        justify='center'
      >
        <SignBox
          signIn={true}
          // email={email}
          // pass={pass}
          // onChangeEmail={onChangeEmail}
          // onChangePass={onChangePass}
          // handleSignIn={handleSignIn}
        />
      </Box>
    </Box>
  );
};

export default SignIn;
