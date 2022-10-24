import React from "react";
//imports de los parquetes de react-router-dom
import {Routes, Route} from "react-router-dom";
//import de pagina
import { Login } from "../Pages/LoginCrud";
import { TableCrud } from "../Pages/TableCrud";

export const Rutas = () => {
    return(
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/TableCrud" element={<TableCrud/>}></Route>
        </Routes>
    );
  }