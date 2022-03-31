import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Altauser extends React.Component{
    state={
        name:'',
        email:'',
        password:'',
        img_perfil:'',
        direccion:'',
        telefono:'',
        type_user_id:'',        
        typeusers:[],
        resultado:'',
    }

    campoChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    async componentDidMount(){
        const res = await axios.get('http://127.0.0.1:8000/api/typeusers');
        console.log(res); 
        if(res.data.status===200){
            this.setState({
                typeusers: res.data.typeusers                
            });
        }          
    }

    subForm=(e)=>{
        e.preventDefault();
        let data= {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            img_perfil:this.state.img_perfil,
            direccion:this.state.direccion,
            telefono:this.state.telefono,
            type_user_id:this.state.type_user_id,            
        };

        fetch('http://127.0.0.1:8000/api/users',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json',
            },
            mode:"cors",
            body:JSON.stringify(data)
        })
        .then(response=>response.json())
        .then(response=>this.setState({resultado:"Alta de usuario exitosa!!!"}))

    }

    render(){
        return(
            <div>
                    <div className="container">
                        <div className="col-md-4 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <center>
                                    <h4 >Alta usuario
                                    <Link to={{pathname:'/Crudusers'}}>
                                    <button type='button' className='btn btn-success float-end'>Volver</button>
                                    </Link></h4> 
                                    </center>
                                        
                                </div>
                                <div className="card-body">
                                <form onSubmit={this.subForm}>                                   

                                    <div className="form-group mb-3">
                                        <label>Nombre</label>
                                        <input type='text' name="name" className="form-control" onChange={this.campoChange}/>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Correo</label>
                                        <input type='email' name="email" className="form-control" onChange={this.campoChange}/>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Contraseña</label>
                                        <input type='password' name="password" className="form-control" onChange={this.campoChange}/>
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <label>Imagen</label>
                                        <input type='text' name="img_perfil" className="form-control" onChange={this.campoChange}/>
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <label>Direccion</label>
                                        <input type='text' name="direccion" className="form-control" onChange={this.campoChange}/>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Telefono</label>
                                        <input type='text' name="telefono" className="form-control" onChange={this.campoChange}/>
                                    </div>

                                    <div className="form-group mb-3">
                                    <label>
                                    Seleccione rol 
                                    </label>
                                    <select name="type_user_id" className="form-control" onChange={this.campoChange}>
                                        {this.state.typeusers.map((typeuser,i)=>
                                        (<option value={typeuser.id} key={i}>
                                            {typeuser.nombre}
                                        </option>
                                        ))}
                                    </select>                                    
                                    </div>

                                    <center>
                                    <div className="form-group mb-3">
                                        <input type="submit" value="Guardar" className="btn btn-primary btn-lg"/>
                                    </div>
                                    </center>                                                                                     
                                </form>   
                                <center>
                                <div>
                                    {this.state.resultado
                                    ? <div className="alert alert-success">{this.state.resultado}</div>
                                    :<div></div>}
                                </div>    
                                </center>                                
                                </div>
                            </div>
                        </div>
                    </div>             
            </div>
        )
    }
}

export default Altauser