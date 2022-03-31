import React from "react";
import { Link } from "react-router-dom";

class Cruddetalle extends React.Component{
    state={
        productos:[]
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/productos/'+this.props.location.state.id)
        .then(response=>response.json())
        .then(productosJson=>this.setState({productos:productosJson}))
    }

    render(){
        const {productos}=this.state
        return(
            <div>
                <div><h2>Detalle del producto</h2></div>
                <img src={productos.foto} className="img-thumbnail" height="200" width="200" alt="foto producto"/>
                <br/>
                Nombre: {productos.nombre}
                <br/>
                Precio: {productos.precio}
                <br/>
                <div>
                    <Link to = "/Crudproductos">
                        <button type="button" className="btn btn-success">Volver</button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Cruddetalle