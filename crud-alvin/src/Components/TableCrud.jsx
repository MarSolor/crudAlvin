import { Button, Table } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import {  Form, Input } from 'antd';
import {useModalState} from './ModalCrud'
import Modal from 'antd/lib/modal'
import { useState } from 'react';

export const TableCrud  =({}) => {
    //se usan las funciones de ModalCrud y variable //!visible
    //!abrir
    const {onOpen, visible, onClose} = useModalState()
    //data dummy
    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            key: 1,
            nombre: "Mario Ortega",
            edad: 24,
            correo: "mortega@outlook.com",
            direccion: "alameda 1"
        },
        {
            id: 2,
            key: 2,
            nombre: "Mario Ortega",
            edad: 24,
            correo: "mortega@outlook.com",
            direccion: "alameda 1"
        },
        {
            id: 3,
            key: 3,
            nombre: "Mario Ortega",
            edad: 24,
            correo: "mortega@outlook.com",
            direccion: "alameda 1"
        },
        {
            id: 4,
            key: 4,
            nombre: "Mario Ortega",
            edad: 24,
            correo: "mortega@outlook.com",
            direccion: "alameda 1"
        },
    ]);
    //!agregar persona
    
    //!eliminar persona
    const onDeletePersona=(record)=>{
        console.log(record);
        setDataSource(dataSource.filter(item => record.id !== item.id));
    }
    //!editar persona
    //!uso de data dummy en tabla
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
            //!es neceasrio usar el guion bajo es una variable anonima 
            render: (_, record) => <>
            <Button id="btn-editar" type="primary" onClick= {() => {
                console.log('wenas')
                onOpen()}}>Editar</Button> 
                
                {"    "}
            
            <Button id="btn-eliminar" type="primary" danger onClick={()=>{
                        onDeletePersona(record)
                    }}>Eliminar</Button> 
            
            </>
            
          },
    ]
      
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
                    <Input name="nombre"></Input>
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
                    <Input name="edad"></Input>
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
                    <Input name="correo"></Input>
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
                    <Input name="direccion"></Input>
                </Form.Item>
            </Form>

        </Modal> 
        <br />
           <Table columns={columns} dataSource={dataSource}></Table>
        </>
    );
}