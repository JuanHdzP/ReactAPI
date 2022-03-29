import React, { Component } from 'react';
import '../components/styles/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Register extends Component {
    render() {
        return (
    <div className="containerPrincipal">
        <div className="containerSecundario">
            
          <div className="form-group">
          <label>Nombre: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="nombre"
            />
            <br />
            <label>Correo Electronico: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="correo"
            />
            <br />
            <label>Direccion: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="direccion"
            />
            <br />
            <label>Telefono: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="telefono"
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
            />
            <br />
            <label>Confirmar contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
            />
            <br />
            <button className="btn btn-primary">Registrarse</button>
          </div>
        </div>
      </div>
        );
    }
}

export default Register;