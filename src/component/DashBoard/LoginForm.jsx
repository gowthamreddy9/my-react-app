import React, { useState } from 'react';


import { Form, Input, Button, Alert, Row, Col } from 'antd';

const LoginForm = ({ baseUrl, issuer }) => {



  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleSubmit = (e) => {
   console.log();
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const errorAlert = error ? <Row>
    <Col span="8"></Col>
    <Col span="8">  <Alert message="Authentication Failed" type="warning">

    </Alert></Col>
  </Row> : ''

  return (

    <Form
      {...layout}
      onSubmit={handleSubmit}
    >

      <Row>
        <Col span="8"></Col>
        <Col span="8">   <p>Please Login with your Okta Account</p></Col>
      </Row>

      <Form.Item
        label="Username"
        name="username"
        value={username}
        onChange={handleUsernameChange}
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Login
        </Button>
      </Form.Item>

      { errorAlert }

    </Form>
  );
};
export default LoginForm;