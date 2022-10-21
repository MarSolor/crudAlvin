import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { useState } from 'react';

//TODO corregir lo de captura de datos, state y onchange
//TODO quede en minuto 12 de 27 de fake api
//TODO volver a ver video del crud de borja

export const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  //!caputura de datos
  const [campoSeleccionado, setCampoSeleccionado] = useState(null);
  

  //!estados de los campos del formulario vacio
  const handleChange= e=>{
    const {name, value}=e.target;
    setCampoSeleccionado((estado)=>({
      ...estado,
      [name]:value
    }))
    console.log(campoSeleccionado);
  }
  return (
    
    <Form
      name="form-login"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <br />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Form.Item
        label="Username"
        name="username"
        onChange={handleChange}
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input name="username"/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        onChange={handleChange} 
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password name="password"/>
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};