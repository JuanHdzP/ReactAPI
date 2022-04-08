import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';



class Login extends React.Component {

    
    state={
        form:{
            "email":"",
            "password":""
        },
        error:false,
        errorMsj:""
    }

    manejadorSubmit(e){
        e.preventDefault();
    }

    manejadorChange=async (e)=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
    }

    manejadorBoton=()=>{
        let url="http://127.0.0.1:8000/api/login"
        axios.post(url,this.state.form)
        .then(response=>{
            if(response.data.status===200){
                return <Redirect to="/login"/>;
                        }else{
                this.setState({
                    error:true,
                    errorMsj: response.data.message
                })
            }
        }).catch(error=>{
            console.log(error);
            this.setState({
                error:true,
                errorMsj: "Error al conectar con el API"
            })
        })
    }

    render() {
        return (
         <React.Fragment>                 
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
                                <form onSubmit={this.manejadorSubmit}>                                  

                                    <div className="form-group mb-3">
                                        <input type='email' name="email" className="form-control" placeholder="Correo" onChange={this.manejadorChange}/>
                                    </div>

                                    <div className="form-group mb-3">
                                        <input type='password' name="password" className="form-control" placeholder="Contraseña" onChange={this.manejadorChange}/>
                                    </div>
                                    <center>
                                    <div className="form-group mb-3">
                                        <input type="submit" value="Iniciar sesion" className="btn btn-primary btn-lg" onClick={this.manejadorBoton}/>
                                    </div>
                                    </center>  
                                    </form> 
                                    {this.state.error===true &&
                                    <center>

                                        <div className="alert alert-danger" role="alert">
                                            {this.state.errorMsj}
                                        </div> 
                                    </center>
                                    }                                                         
                                </div>
                            </div>
                        </div>
                    </div>        
         </React.Fragment>
        );
    }
}

export default Login;
