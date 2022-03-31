import React from "react";
import { Link } from "react-router-dom";

class Eliminatypeuser extends React.Component{
    state={
        typeusers:[]
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/typeusers/'+this.props.location.state.id)
        .then(response=>response.json())
        .then(typeusersJson=>this.setState({typeusers:typeusersJson}))
        
        
        fetch('http://127.0.0.1:8000/api/typeusers/'+this.props.location.state.id,
        {method:'delete'});
    }

    render(){
        return(
            <div>
                <div><h2>Elimina tipo de usuario</h2></div>
                <br/>
                <div className="alert alert-success">
                <center><strong>Successs!!</strong>
                    <br/>
                 El tipo de usuario <strong>{this.state.typeusers.nombre}</strong>
                    <br/>
                    ha sido eliminado correctamente.</center>
                </div>
                <div>
                    <Link to = "/Crudtypeusers">
                        <button type="button" className="btn btn-success">Volver</button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Eliminatypeuser