import React, { useState, useRef } from 'react';
import { Box, Text } from 'grommet';
import NavBar from '../components/nav/NavBar';
import SignBox from '../components/sign/SignBox';
import AuthService from '../services/auth.service';

//TODO JWT AUTH

const SignIn = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePass = (e) => {
    const pass = e.target.value;
    setPass(pass);
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    setMessage('');
    setLoading(true);

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(email, pass).then(
        () => {
          props.history.push('/admin');
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <Box fill background='accent-3'>
      <NavBar />
      <Box
        direction='row'
        flex
        overflow={{ horizontal: 'hidden' }}
        align='center'
        justify='center'
      >
        <SignBox
          signIn={true}
          email={email}
          pass={pass}
          onChangeEmail={onChangeEmail}
          onChangePass={onChangePass}
          handleSignIn={handleSignIn}
        />
      </Box>
    </Box>
  );
};

export default SignIn;
