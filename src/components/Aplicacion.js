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
import Detalleproducto from "../pages/Detalleproducto";
import Eliminaproducto from "../pages/Eliminaproducto";
import Eliminacategoria from "../pages/Eliminacategoria";
import Eliminatypeuser from "../pages/Eliminatypeuser";
import Crudventas from "../pages/Crudventas";
import Eliminaventa from "../pages/Eliminaventa";
import Crudusers from "../pages/Crudusers";
import Detalleuser from "../pages/Detalleuser";
import Eliminauser from "../pages/Eliminauser";
import Navbar from "./Navbar";
import Login from "../pages/Login"; 
import Register from "../pages/Register"; 
import Inicio from "../pages/Inicio";

function Aplicacion(){
    return(
        <BrowserRouter>
                <Navbar/>
            <Switch>
                <Route exact path="/" component={Inicio}/>   
                <Route exact path="/Crudproductos" component={Crudproductos}/>   
                <Route exact path="/Detalleproducto" component={Detalleproducto}/>   
                <Route exact path="/Eliminaproducto" component={Eliminaproducto}/>   
                <Route exact path="/Crudcategorias" component={Crudcategorias}/>   
                <Route exact path="/Eliminacategoria" component={Eliminacategoria}/>   
                <Route exact path="/Crudtypeusers" component={Crudtypeusers}/>   
                <Route exact path="/Eliminatypeuser" component={Eliminatypeuser}/>   
                <Route exact path="/Crudventas" component={Crudventas}/>   
                <Route exact path="/Eliminaventa" component={Eliminaventa}/>   
                <Route exact path="/Crudusers" component={Crudusers}/>   
                <Route exact path="/Detalleuser" component={Detalleuser}/>   
                <Route exact path="/Eliminauser" component={Eliminauser}/>   
                <Route exact path="/Login" component={Login}/>   
                <Route exact path="/Register" component={Register}/>   
                <Route component={Noexiste}/>   
            </Switch>              
        </BrowserRouter>
    )
}

export default Aplicacion