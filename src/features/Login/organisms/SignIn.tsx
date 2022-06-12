import React from 'react';

import { Button, Checkbox, Form, Input } from 'antd';
import { Row } from 'antd';
import { Typography } from 'antd';


const { Title, Text } = Typography;

const SignIn = ({ onPress }: any) => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
        <Text>
          Добро пожаловать
        </Text>
        <Title  style={{ margin:0, marginBottom:20 }} level={5}>Войдите в ваш аккаунт</Title>
        <Form
          name='basic'
          initialValues={{
              remember: false,
              username:'',
              password:''
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            name='username'
            rules={[
              {
                required: false,
                message: 'Please input your username!',
              },
            ]}
            style={{ marginBottom:12 }}
          >
            <Input  placeholder={'Введите ваш емайл'}/>
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              {
                required: false,
                message: 'Please input your password!',
              },
            ]}
            style={{ marginBottom:12 }}
          >
            <Input.Password  placeholder={'Ваш пароль'}/>
          </Form.Item>

          <Form.Item
            name='remember'
            valuePropName='checked'
            style={{ marginBottom:12 }}
          >
            <Checkbox>Доверять этому устройству</Checkbox>
          </Form.Item>

          <Form.Item
            // wrapperCol={{
            //   offset: 8,
            //   span: 16,
            // }}
          >
            <Button style={{ width:'100%',borderRadius:4 }} type='primary' htmlType='submit'>
              Войти
            </Button>
          </Form.Item>
        </Form>
        <Row  align={'middle'}>
        <Text style={{ margin:0 }}>Не получается войти?</Text>
         <Button onClick={onPress} style={{ margin:0 }} type='link'>Восстановить пароль</Button>
        </Row>
      </div>
  );
};

export default SignIn;