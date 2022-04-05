import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card , Button} from "react-bootstrap"
import { Link } from "react-router-dom";

class Eliminacategoria extends React.Component{
    state={
        categorias:[]
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/categorias/'+this.props.location.state.id)
        .then(response=>response.json())
        .then(categoriasJson=>this.setState({categorias:categoriasJson}))
        
        
        fetch('http://127.0.0.1:8000/api/categorias/'+this.props.location.state.id,
        {method:'delete'});
    }

    render(){
        return(
            <div>
                <center>
                <div><h2>Elimina categoria</h2></div>   
                <br/>     
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"  />
                <Card.Body>
                    <Card.Title><h5>                     La categoria <strong>{this.state.categorias.nombre}</strong> ha sido eliminada                   
</h5></Card.Title>
              
                   
                    <Link to = "/Crudcategorias">
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
export default Eliminacategoria