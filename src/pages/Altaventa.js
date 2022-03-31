import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Altaventa extends React.Component{
    state={
        fecha:'',
        total:'',
        cliente_id:'',
        empleado_id:'',
        users:[],
        resultado:'',
    }

    campoChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    async componentDidMount(){
        const res = await axios.get('http://127.0.0.1:8000/api/users');
        console.log(res); 
        if(res.data.status===200){
            this.setState({
                users: res.data.users                
            });
        }          
    }

    subForm=(e)=>{
        e.preventDefault();
        let data= {
            fecha:this.state.fecha,
            total:this.state.total,
            cliente_id:this.state.cliente_id,
            empleado_id:this.state.empleado_id,
        };

        fetch('http://127.0.0.1:8000/api/ventas',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json',
            },
            mode:"cors",
            body:JSON.stringify(data)
        })
        .then(response=>response.json())
        .then(response=>this.setState({resultado:"Alta venta exitosa!!!"}))

    }

    render(){
        return(
            <div>
                    <div className="container">
                        <div className="col-md-4 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <center>
                                    <h4 >Alta venta
                                    <Link to={{pathname:'/Crudventas'}}>
                                    <button type='button' className='btn btn-success float-end'>Volver</button>
                                    </Link></h4> 
                                    </center>
                                        
                                </div>
                                <div className="card-body">
                                <form onSubmit={this.subForm}>                                   

                                    <div className="form-group mb-3">
                                        <label>Fecha</label>
                                        <input type='text' name="fecha" className="form-control" onChange={this.campoChange}/>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Total</label>
                                        <input type='text' name="total" className="form-control" onChange={this.campoChange}/>
                                    </div>
                                                                        
                                    <div className="form-group mb-3">
                                    <label>
                                    Cliente
                                    </label>
                                    <select name="cliente_id" className="form-control" onChange={this.campoChange}>
                                        {this.state.users.map((user,i)=>
                                            (<option value={user.id} key={i}>
                                                {user.name}
                                        </option>
                                        ))}
                                    </select>                                    
                                    </div>

                                    <div className="form-group mb-3">
                                    <label>
                                    Empleado
                                    </label>
                                    <select name="empleado_id" className="form-control" onChange={this.campoChange}>
                                        {this.state.users.map((user,i)=>
                                        (<option value={user.id} key={i}>
                                            {user.name}
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

export default Altaventa