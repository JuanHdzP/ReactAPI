import React from "react";
import { Link } from "react-router-dom";

class Prueba extends React.Component{
    state={
        categorias:{
            nombre:'Prueba',
        },
        resultado:'', 
    }

    async componentDidMount(){
            fetch('http://127.0.0.1:8000/api/categorias/'+6)
            .then(response=>response.json())
            .then(categoriasJson=>this.setState({categorias:categoriasJson}))
    }

    subForm=(e)=>{
        e.preventDefault();
        let data= {
            nombre:'Prueba',            
        };

        fetch('http://127.0.0.1:8000/api/categorias',{
            method:'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json',
            },
            mode:"cors",
            body:JSON.stringify(data)
        })
        .then(response=>response.json())
        .then(response=>this.setState({resultado:"Categoria modificada!!!"}))
    }


    render(){
        const {categorias}=this.state

        return(
            <div>
<div className="card-body">
                                <form onSubmit={this.subForm}>                                   

                                    <div className="form-group mb-3">
                                        <label>Nombre</label>
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
                                    : <div></div>}
                                </div>    
                                </center>
                                
                                </div>
            </div>
        )
    }
}

export default Prueba