import React from "react";
import { Link } from "react-router-dom";

class Eliminacategoria extends React.Component{
    state={
        categorias:[]
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/categorias/'+this.props.location.state.id)
        .then(response=>response.json())
        .then(categoriasJson=>this.setState({categorias:categoriasJson}))
        
        
        fetch('http://127.0.0.1:8000/api/categorias/'+this.props.location.state.id,
        {method:'delete'});
    }

    render(){
        return(
            <div>
                <div><h2>Elimina categoria</h2></div>
                <br/>
                <div className="alert alert-success">
                <center><strong>Successs!!</strong>
                    <br/>
                 La categoria <strong>{this.state.categorias.nombre}</strong>
                    <br/>
                    ha sido eliminada correctamente.</center>
                </div>
                <div>
                    <Link to = "/Crudcategorias">
                        <button type="button" className="btn btn-success">Volver</button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Eliminacategoria