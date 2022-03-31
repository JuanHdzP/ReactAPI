import React from "react";
import { Link } from "react-router-dom";

class Eliminaventa extends React.Component{
    state={
        ventas:[]
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/ventas/'+this.props.location.state.id)
        .then(response=>response.json())
        .then(ventasJson=>this.setState({ventas:ventasJson}))
        
        
        fetch('http://127.0.0.1:8000/api/ventas/'+this.props.location.state.id,
        {method:'delete'});
    }

    render(){
        return(
            <div>
                <div><h2>Elimina venta</h2></div>
                <br/>
                <div className="alert alert-success">
                <center><strong>Successs!!</strong>
                    <br/>
                 La venta #<strong>{this.state.ventas.id}</strong>
                    <br/>
                    ha sido eliminada correctamente.</center>
                </div>
                <div>
                    <Link to = "/Crudventas">
                        <button type="button" className="btn btn-success">Volver</button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Eliminaventa