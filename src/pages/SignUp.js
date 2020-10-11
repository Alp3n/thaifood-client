import React, { useState, useRef } from 'react';
import { Box } from 'grommet';
import NavBar from '../components/NavBar';
import SignBox from '../components/Sign/SignBox';
import AuthService from '../services/auth.service';
//TODO JWT AUTH
const SignUp = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [successful, setSuccessful] = useState(false);
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

  const handleSignUp = (e) => {
    e.preventDefault();

    setMessage('');
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(email, pass).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
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
          signIn={false}
          email={email}
          pass={pass}
          onChangeEmail={onChangeEmail}
          onChangePass={onChangePass}
          handleSignUp={handleSignUp}
        />
      </Box>
    </Box>
  );
};

export default SignUp;
