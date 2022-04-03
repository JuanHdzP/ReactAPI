import React, { Component } from 'react';
import '../components/styles/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
    render() {
        return (
          <div>
            <div className="container">
                        <div className="col-md-4 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <center>
                                    <h4 >Login
                                    </h4> 
                                    </center>
                                        
                                </div>
                                <div className="card-body">
                                <form>                                   

                                    <div className="form-group mb-3">
                                        <label>Correo</label>
                                        <input type='email' name="email" className="form-control"/>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Contraseña</label>
                                        <input type='password' name="password" className="form-control" />
                                    </div>
                                    <center>
                                    <div className="form-group mb-3">
                                        <input type="submit" value="Iniciar sesion" className="btn btn-primary btn-lg"/>
                                    </div>
                                    </center>  
                                    </form>      

                                                      
                                </div>
                            </div>
                        </div>
                    </div>        
          </div>
        );
    }
}

export default Login;