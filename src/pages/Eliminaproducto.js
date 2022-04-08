import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card , Button} from "react-bootstrap"
import { Link } from "react-router-dom";

class Eliminaproducto extends React.Component{
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
                <center>
                <div><h4>Elimina producto</h4></div>   
                <br/>     
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"  />
                <Card.Body>
                    <Card.Title><h5>El producto <strong>{this.state.productos.nombre}</strong> ha sido eliminado</h5></Card.Title>                                 
                    <Link to = "/Crudproductos">
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
export default Eliminaproducto