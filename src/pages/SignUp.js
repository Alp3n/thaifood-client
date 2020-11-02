import React, { useContext } from 'react';
import { Box, ResponsiveContext } from 'grommet';
import NavBar from '../components/nav/NavBar';
import TopNavBar from '../components/nav/TopNavBar';

import SignBox from '../components/sign/SignBox';
//TODO JWT AUTH
const SignUp = (props) => {
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
          signIn={false}
          // email={email}
          // pass={pass}
          // onChangeEmail={onChangeEmail}
          // onChangePass={onChangePass}
          // handleSignUp={handleSignUp}
        />
      </Box>
    </Box>
  );
};

export default SignUp;
