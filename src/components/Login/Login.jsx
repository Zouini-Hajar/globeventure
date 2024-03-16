import React, { useEffect, useState } from 'react';
import { auth } from '../../configs/firebaseConfig';
import { isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';
import { Input, Divider, Button, Typography } from 'antd';
import LoginWithGoogle from './LoginWithGoogle';

const { Title, Text, Link } = Typography;

const Login = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState('');

  // Display states
  const [title, setTitle] = useState('Welcome back');
  const [question, setQuestion] = useState('Don\'t have an account? ');
  const [link, setLink] = useState('Sign up');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [infoMsg, setInfoMsg] = useState('');

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const changeDisplay = () => {
    if (link === 'Sign up') {
      setTitle('Create your account');
      setQuestion('Already have an account? ');
      setLink('Log in');
    } else {
      setTitle('Welcome back');
      setQuestion('Don\'t have an account? ');
      setLink('Sign up');
    }
  };

  const handleLogin = () => {
    // Here we should validate if the email is correct
    if (validateEmail(email)) {
      setError('');
    } else {
      setError('Invalid email adress');
      setEmailStatus('error')
    }

    setLoading(true);
    sendSignInLinkToEmail(auth, email, {
      // The URL we will redirect back to after clicking the link on the mailbox
      url: 'http://localhost:3000/login',
      handleCodeInApp: true
    }).then(() => {
      localStorage.setItem('userEmail', email);
      setLoading(false);
      setError('');
      setInfoMsg('We have sent you an email with a link to Log In.')
    }).catch(err => {
      setLoading(false);
      setError(err.message);
    })
  }

  useEffect(() => {
    if (user) {
      // User already signed in
      navigate('/');
    } else {
      // User not signed in but the link is valid
      if (isSignInWithEmailLink(auth, window.location.href)) {
        // After that we will complete the login process
        let email = localStorage.getItem('userEmail');
        if (!email) {
          email = prompt('Please enter your email for confirmation');
        }

        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            localStorage.removeItem('userEmail');
            navigate('/');
          })
          .catch((err) => {
            console.log(err.message)
          });
      }
    }
  }, []);

  return (
    <div style={{ width: '60%' }}>
      <Title style={{ marginBottom: '1.8rem', textAlign: 'center' }} level={2}>
        {title}
      </Title>

      <Input
        style={{ marginBottom: '1rem' }}
        size='large'
        placeholder=" Email address"
        prefix={<MailOutlined />}
        status={emailStatus}
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <Button
        size='large'
        style={{ margin: '0.2rem 0' }}
        type='primary'
        block
        onClick={handleLogin}
      >
        {loading ? 'Logging you in' : 'Continue'}
      </Button>

      <Text style={{ display: 'block', textAlign: 'center', marginTop: '0.8rem' }}>
        {question}
        <Link href="#" onClick={changeDisplay}>{link}</Link>
      </Text>

      <Divider plain>OR</Divider>

      <LoginWithGoogle />
    </div>
  );
}

export default Login;