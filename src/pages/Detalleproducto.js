import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card , Button} from "react-bootstrap";


class Detalleproducto extends React.Component{
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
                <center>
                <div><h4>Detalle del producto</h4></div>   
                <br/>     
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={productos.foto} />
                <Card.Body>
                    <Card.Title><h5>Nombre: {productos.nombre}</h5></Card.Title>
                    <Card.Text>
                    Precio: {productos.precio}
                    </Card.Text>
                    <Card.Text>
                    Descripcion: {productos.descripcion}
                    </Card.Text>
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
export default Detalleproducto