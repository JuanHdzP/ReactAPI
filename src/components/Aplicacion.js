import React from "react";
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
  import Noexiste from "../pages/Noexiste";
import Crudproductos from "../pages/Crudproductos";
import Crudcategorias from "../pages/Crudcategorias";
import Crudtypeusers from "../pages/Crudtypeusers";
import Cruddetalle from "../pages/Cruddetalle";
import Crudelimina from "../pages/Crudelimina";
import Crudusers from "../pages/Crudusers";
import Crudventas from "../pages/Crudventas";
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
                <Route exact path="/Crudproductos" component={Crudproductos}/>   
                <Route exact path="/Crudcategorias" component={Crudcategorias}/>   
                <Route exact path="/Crudtypeusers" component={Crudtypeusers}/>   
                <Route exact path="/Crudusers" component={Crudusers}/>   
                <Route exact path="/Crudventas" component={Crudventas}/>   
                <Route exact path="/Cruddetalle" component={Cruddetalle}/>   
                <Route exact path="/Crudelimina" component={Crudelimina}/>   
                <Route exact path="/Login" component={Login}/>   
                <Route exact path="/Register" component={Register}/>   
                <Route component={Noexiste}/>   
            </Switch>              
        </BrowserRouter>
    )
}

export default Aplicacion