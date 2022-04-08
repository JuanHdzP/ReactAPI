import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card , Button} from "react-bootstrap";


class Detalleproducto extends React.Component{
    state={
        users:[]
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/users/'+this.props.location.state.id)
        .then(response=>response.json())
        .then(usersJson=>this.setState({users:usersJson}))
    }

    render(){
        const {users}=this.state
        return(
            <div>
                <center>
                <div><h4>Detalle del usuario</h4></div>   
                <br/>     
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={users.img_perfil} />
                <Card.Body>
                    <Card.Title><h5>Nombre: {users.name}</h5></Card.Title>
                    <Card.Text>
                    Correo: {users.email}                    
                    </Card.Text>  
                    <Card.Text>
                    Telefono: {users.telefono}                    
                        </Card.Text>                  
                        <Card.Text>                            
                    Direccion: {users.direccion}                    
                        </Card.Text>
                        <Card.Text>
                    Tipo de usuario: {users.tipousuario}                    
                        </Card.Text>
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
export default Detalleproducto