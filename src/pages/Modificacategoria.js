import React from "react";
import { Link } from "react-router-dom";

class Modificacategoria extends React.Component{
    state={
        categorias:{
            nombre:'',
        },
        resultado:'', 
    }

    handleChange = async e=>{
        e.persist();
        await this.setState({
            categorias:{
                ...this.state.categorias,
                [e.target.name]:e.target.value
            }
        })   
    }

    async componentDidMount(){
            fetch('http://127.0.0.1:8000/api/categorias/'+this.props.location.state.id)
            .then(response=>response.json())
            .then(categoriasJson=>this.setState({categorias:categoriasJson}))
    }

    subForm=(e)=>{
        e.preventDefault();
        let data= {
            nombre:this.state.categorias.nombre,            
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
                <div className="container">
                        <div className="col-md-4 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <center>
                                    <h4 >Modificar categoria
                                    <Link to={{pathname:'/Crudcategorias'}}>
                                    <button type='button' className='btn btn-success float-end'>Volver</button>
                                    </Link></h4> 
                                    </center>
                                        
                                </div>
                                <div className="card-body">
                                <form onSubmit={this.subForm}>                                   

                                    <div className="form-group mb-3">
                                        <label>Nombre</label>
                                        <input type='text' name="nombre" value={categorias.nombre} onChange={this.handleChange} className="form-control"/>
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
                        </div>
                    </div>             
            </div>
        )
    }
}

export default Modificacategoria