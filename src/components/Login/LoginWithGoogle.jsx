import React from 'react';
import { auth } from '../../configs/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const LoginWithGoogle = () => {
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        navigate('/');
      }).catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Button
        size='large'
        block
        onClick={handleLogin}
      >
        <GoogleOutlined /> Continue with Google
      </Button>
    </>
  );
}

export default LoginWithGoogle;