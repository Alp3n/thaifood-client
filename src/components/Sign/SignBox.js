import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Form,
  FormField,
  Heading,
  MaskedInput,
  ResponsiveContext,
  Text,
  TextInput,
} from 'grommet';
//TODO JWT AUTH'

const SignBox = ({
  signIn,
  email,
  pass,
  onChangeEmail,
  onChangePass,
  handleSignIn,
  handleSignUp,
}) => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      align='center'
      justify='center'
      width={size !== 'small' ? 'medium' : '100%'}
      background='#eee'
      pad='small'
    >
      <Heading level='2'>{signIn ? 'Sign In' : 'Sign Up'}</Heading>
      <Box fill='horizontal' pad='small'>
        <Form onSubmit={signIn ? handleSignIn : handleSignUp}>
          <FormField label='Email' name='email' required>
            <MaskedInput
              name='email'
              mask={[
                { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
                { fixed: '@' },
                { regexp: /^[\w]+$/, placeholder: 'my' },
                { fixed: '.' },
                { regexp: /^[\w]+$/, placeholder: 'com' },
              ]}
              value={email}
              onChange={onChangeEmail}
            />
          </FormField>
          <FormField
            label='Password'
            name='password'
            htmlFor='password'
            required
          >
            <TextInput
              name='password'
              id='password'
              type='password'
              value={pass}
              onChange={onChangePass}
            />
          </FormField>
          <Link to={signIn ? '/signin' : '/signup'}>
            <Text size='small'>
              {signIn
                ? "Don't have an account? Sign Up"
                : 'Already have an account? Sign In'}
            </Text>
          </Link>
          <Box margin='medium'>
            <Button
              type='submit'
              fill='horizontal'
              label={signIn ? 'Sign In' : 'Sign Up'}
              primary
            />
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

export default SignBox;
