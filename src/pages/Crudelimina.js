import React from "react";
import { Link } from "react-router-dom";

class Crudelimina extends React.Component{
    state={
        productos:[]
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/productos/'+this.props.location.state.id)
        .then(response=>response.json())
        .then(productosJson=>this.setState({productos:productosJson}))
        
        
        fetch('http://127.0.0.1:8000/api/productos/'+this.props.location.state.id,
        {method:'delete'});
    }

    render(){
        return(
            <div>
                <div><h2>Elimina producto</h2></div>
                <br/>
                <div className="alert alert-success">
                <center><strong>Successs!!</strong>
                    <br/>
                 El producto <strong>{this.state.productos.nombre}</strong>
                    <br/>
                    ha sido eliminado correctamente.</center>
                </div>
                <div>
                    <Link to = "/Crudproductos">
                        <button type="button" className="btn btn-success">Volver</button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Crudelimina