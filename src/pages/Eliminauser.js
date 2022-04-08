import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card , Button} from "react-bootstrap"
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
                <center>
                <div><h4>Elimina usuario</h4></div>   
                <br/>     
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"  />
                <Card.Body>
                    <Card.Title><h5>El usuario <strong>{this.state.users.name}</strong> ha sido eliminado</h5></Card.Title>                                 
                    <Link to = "/Crudusers">
                    <Button variant="success">Volver</Button>
                       {/*  <button type="button" className="btn btn-success">Volver</button> */}
                    </Link>                   
                </Card.Body>
                </Card>
                </center>
                </div>                
        )
    }
}
export default Eliminauser