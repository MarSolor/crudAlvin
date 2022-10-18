import { Button, Table } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import { message, Popconfirm, Form, Input } from 'antd';
import {useModalState} from './ModalCrud'
import Modal from 'antd/lib/modal'
import { useState } from 'react';

export const TableCrud  =({}) => {
    //se usan las funciones de ModalCrud y variable //!visible
    //!abrir
    const {onOpen, visible, onClose} = useModalState()
    //data dummy
    const [dataSource] = useState([
        {
            id: 1,
            nombre: "Mario Ortega",
            edad: 24,
            correo: "mortega@outlook.com",
            direccion: "alameda 1"
        },
        {
            id: 2,
            nombre: "Mario Ortega",
            edad: 24,
            correo: "mortega@outlook.com",
            direccion: "alameda 1"
        },
        {
            id: 3,
            nombre: "Mario Ortega",
            edad: 24,
            correo: "mortega@outlook.com",
            direccion: "alameda 1"
        },
    ]);
    //!agregar persona
    
    //uso de data dummy
    const columns = [
        {
            key: "1",
            title: "ID",
            dataIndex: "id",
        },
        {
            key: "2",
            title: "Nombre",
            dataIndex: "nombre",
        },
        {
            key: "3",
            title: "Edad",
            dataIndex: "edad",
        },
        {
            key: "4",
            title: "Correo",
            dataIndex: "correo",
        },
        {
            key: "5",
            title: "Direccion",
            dataIndex: "direccion",
            
        },
        {
            key: '6',
            title: 'Acciones',
            dataIndex: 'acciones',
            
            render: () => <>
            <Button 
                id="btn-editar" 
                type="primary" 
                onClick= {() => {
                //console.log('wenas')
                onOpen()}}>Editar</Button> {"    "}
            {/* componente para visualizacion de confirmacion */}
            <Popconfirm
                title="Desea realizar esta acción?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="SI"
                cancelText="NO"
            >
                <Button id="btn-eliminar" type="primary" danger>Eliminar</Button> 
            </Popconfirm>
            </>
            
          },
    ]
    
    /* mensaje emergente  de accion */
    const confirm = (e) => {
        console.log(e);
        message.success('Elemento eliminado');
      };
      const cancel = (e) => {
        console.log(e);
        message.error('Cancelado');
      };
    
    return(
        <>
        <br />
        <br />
        <br />
        <Button 
            onClick= {() => {
                //console.log('wenas')
                onOpen()}}
            id="btn-agregar"
            type="primary"
            style={{
            marginBottom: 20,
            }}
        >
        Agregar
      </Button>
        <Modal
        //elementos del modal
        title = "Registro de Personal" 
        open={visible} 
        onCancel={() => onClose()}
        footer={[
            <Button type="primary" danger onClick={onClose}>Cacelar</Button>,
            <Button type="primary">Enviar</Button>
        ]}>
            <br/>
            <Form labelCol={{span:4}}>
                <Form.Item
                    label="Nombre"
                    name="nombre-form"
                    rules={[
                    {
                        required: true,
                        message: 'Ingrese su nombre, por favor!',
                    },
                    ]}
                >
                    <Input></Input>
                </Form.Item>

                <Form.Item
                    label="Edad"
                    name="edad-form"
                    rules={[
                    {
                        required: true,
                        message: 'Ingrese su edad, por favor!',
                    },
                    ]}
                >
                    <Input></Input>
                </Form.Item>

                <Form.Item
                    label="Correo"
                    name="correo-form"
                    rules={[
                    {
                        required: true,
                        message: 'Ingrese su correo, por favor!',
                    },
                    ]}
                >
                    <Input></Input>
                </Form.Item>

                <Form.Item
                    label="Direccion"
                    name="direccion-form"
                    rules={[
                    {
                        required: true,
                        message: 'Ingrese su direccion, por favor!',
                    },
                    ]}
                >
                    <Input></Input>
                </Form.Item>
            </Form>

        </Modal> 
        <br />
           <Table columns={columns} dataSource={dataSource}></Table>
        </>
    );
}