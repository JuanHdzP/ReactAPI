import React from "react";
import { Link } from "react-router-dom";

class Altatypeuser extends React.Component{
    state={
        nombre:'',        
        resultado:'',
    }

    campoChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    subForm=(e)=>{
        e.preventDefault();
        let data= {
            nombre:this.state.nombre,            
        };

        fetch('http://127.0.0.1:8000/api/typeusers',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json',
            },
            mode:"cors",
            body:JSON.stringify(data)
        })
        .then(response=>response.json())
        .then(response=>this.setState({resultado:"Alta de rol exitosa!!!"}))

    }

    render(){
        return(
            <div>
                    <div className="container">
                        <div className="col-md-4 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <center>
                                    <h4 >Alta categoria
                                    <Link to={{pathname:'/Crudtypeusers'}}>
                                    <button type='button' className='btn btn-success float-end'>Volver</button>
                                    </Link></h4> 
                                    </center>
                                        
                                </div>
                                <div className="card-body">
                                <form onSubmit={this.subForm}>                                   

                                    <div className="form-group mb-3">
                                        <label>Nombre</label>
                                        <input type='text' name="nombre" className="form-control" onChange={this.campoChange}/>
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

export default Altatypeuser