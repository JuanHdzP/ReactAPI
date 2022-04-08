import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card , Button} from "react-bootstrap"
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
                <center>
                <div><h4>Elimina venta</h4></div>   
                <br/>     
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"  />
                <Card.Body>
                    <Card.Title><h5>La venta #<strong>{this.state.ventas.id}</strong> ha sido eliminada</h5></Card.Title>                                 
                    <Link to = "/Crudventas">
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
export default Eliminaventa