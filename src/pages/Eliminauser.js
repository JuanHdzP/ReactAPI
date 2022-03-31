import React from "react";
import { Link } from "react-router-dom";

class Eliminauser extends React.Component{
    state={
        users:[]
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/users/'+this.props.location.state.id)
        .then(response=>response.json())
        .then(usersJson=>this.setState({users:usersJson}))
        
        
        fetch('http://127.0.0.1:8000/api/users/'+this.props.location.state.id,
        {method:'delete'});
    }

    render(){
        return(
            <div>
                <div><h2>Elimina usuario</h2></div>
                <br/>
                <div className="alert alert-success">
                <center><strong>Successs!!</strong>
                    <br/>
                 El usuario <strong>{this.state.users.name}</strong>
                    <br/>
                    ha sido eliminado correctamente.</center>
                </div>
                <div>
                    <Link to = "/Crudusers">
                        <button type="button" className="btn btn-success">Volver</button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Eliminauser