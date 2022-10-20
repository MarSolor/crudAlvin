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
    //!tabla formulario actualizar
    
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
    //!editar persona
    //!captura de datos de inputs
    const [personaSeleccionada, setPersonaSeleccionada] = useState(null);

    const seleccionarPersona = (dataSource)=>{
        setPersonaSeleccionada(dataSource);
        onOpen(true);
    }
    //!captura de datos escritos en inputs para editar
    const handleChange=e=>{
        const {name, value} = e.target;
        setPersonaSeleccionada((estado)=>({
            ...estado,
            [name]: value 
        }));
        console.log(personaSeleccionada);
    }

    //!editar persona
    const editar=()=>{
        //data nueva variable auxiliar
        //recorrerla para modificar
        const dataNueva = dataSource.map(dataSource=>{
            if(dataSource.id === personaSeleccionada.id){
                return personaSeleccionada;
            }

            return dataSource;
        });
        setDataSource(dataNueva);
        onClose();
    }
    //!eliminar persona
    const onDeletePersona=(record)=>{
        console.log(record);
        setDataSource(dataSource.filter(item => record.id !== item.id));
    }
   
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
                //console.log(record)
                seleccionarPersona(record)}}>Editar</Button>
                {" "}
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
                seleccionarPersona(null)
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
        //!key dinamica
        key = {`${visible}`}
        //elementos del modal
        title = "Registro de Personal" 
        open={visible} 
        onCancel={() => onClose(true)}
        footer={[
            <Button type="primary" danger onClick={onClose} key='cancelButton'>Cacelar</Button>,
            <Button type="primary" key='sendButton' onClick={()=>editar()}>Enviar</Button>
        ]}>
            <br/>
            <Form labelCol={{span:4}} initialValues={!!personaSeleccionada ? {
                "nombre-form": personaSeleccionada.nombre,
                "edad-form": personaSeleccionada.edad,
                "correo-form": personaSeleccionada.correo,
                "direccion-form": personaSeleccionada.direccion
            } : {}}>
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
                    <Input name="nombre" onChange={handleChange}></Input>
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
                    <Input name="edad" onChange={handleChange}></Input>
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
                    <Input name="correo" onChange={handleChange}></Input>
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
                    <Input name="direccion" onChange={handleChange}></Input>
                </Form.Item>
            </Form>

        </Modal> 
        <br />
           <Table columns={columns} dataSource={dataSource} key={`${dataSource}`} />
        </>
    );
}