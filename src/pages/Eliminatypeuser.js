import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card , Button} from "react-bootstrap"
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
                <center>
                <div><h4>Elimina rol</h4></div>   
                <br/>     
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"  />
                <Card.Body>
                    <Card.Title><h5>El rol <strong>{this.state.typeusers.nombre}</strong> ha sido eliminado</h5></Card.Title>                                 
                    <Link to = "/Crudtypeusers">
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
export default Eliminatypeuser