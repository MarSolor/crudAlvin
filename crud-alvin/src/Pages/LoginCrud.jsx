import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { useState } from "react";
import axios from "axios";

const baseUrl = "http://localhost:3001/usuarios";

export const Login = () => {
  const onFinish = (successUser) => {
    console.log(successUser);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //!caputura de datos
  const [campoSeleccionado, setCampoSeleccionado] = useState(null);
  //!estados de los campos del formulario vacio
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampoSeleccionado((estado) => ({
      ...estado,
      [name]: value,
    }));
    console.log(campoSeleccionado);
  };

  //!metodo  para peticion http y peticion
  const iniciarSesion = async () => {
    //!promesa para conexion a api 
    const user = await axios.get(baseUrl, {
      params: {
        //!es requerida variable de del hook para capturar el valor ingresado 
        //!con camposeleccionad para ingresar al objeto en el atributo username y password
        username: campoSeleccionado.username,
        password: campoSeleccionado.password,
      },
    });
    //user.data captura la informacion perteneciente al objeto de tipo json
    console.log("user :>> ", user.data);

    const [successUser] = user.data

    //! revisar
    if (successUser) {
      // significa que inicio bien la session
      
      alert('inicio de sesion correcto')
      window.location.href="TableCrud";
    } else {
      // usuario y contraena no encontrado
      alert('inicio de sesion incorrecto ')

    }

    
  };

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
            message: "Please input your username!",
          },
        ]}
      >
        <Input name="username" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        onChange={handleChange}
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password name="password" />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Recuerdame</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        {/* se valida con el onclick iniciar sesion a los datos que se comparan con la api */}
        <Button type="primary" htmlType="submit" onClick={iniciarSesion}>
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};
