import React from "react";
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
  import Noexiste from "../pages/Noexiste";
  import Crudcategorias from "../pages/Crudcategorias"
  import Navbar from "./Navbar";
import Login from "../pages/Login"; 
import Register from "../pages/Register"; 
import Inicio from "../pages/Inicio";
import Contacto from "../pages/Contacto"

function Aplicacion(){
    return(
        <BrowserRouter>
                <Navbar/>
            <Switch>
                <Route exact path="/" component={Inicio}/>   
                <Route exact path="/Contacto" component={Contacto}/>   
                <Route exact path="/Crudcategorias" component={Crudcategorias}/>   
                <Route exact path="/Login" component={Login}/>   
                <Route exact path="/Register" component={Register}/>   
                <Route component={Noexiste}/>   
            </Switch>              
        </BrowserRouter>
    )
}

export default Aplicacion