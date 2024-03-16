import React from 'react';
import { Layout } from 'antd';
import Login from '../components/Login/Login';

const { Sider, Content } = Layout;

const layoutStyle = {
  height: '100vh'
};

const contentStyle = {
  height: '100%',
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center'
};

const AuthPage = () => {
  return (
    <Layout
      style={layoutStyle}
    >
      <Sider
        width={'45%'}
      >
      </Sider>
      <Content
        style={contentStyle}
      >
        <Login />
      </Content>
    </Layout>
  );
}

export default AuthPage;