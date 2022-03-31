import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class Crudusers extends React.Component{
    
    state={
        users:[],
        loading: true,
    }

    async componentDidMount(){
        const res = await axios.get('http://127.0.0.1:8000/api/users');
        //console.log(res); 
        if(res.data.status===200){
            this.setState({
                users: res.data.users,
                loading: false,
            });
        }          
    }
    
    
    render(){
        
        var user_HTMLTABLE = "";
        if(this.state.loading){
            user_HTMLTABLE= 
            <tr>
                <td colSpan="7"><h3>Loading...</h3></td>
            </tr>;
        }else{
            user_HTMLTABLE=
            this.state.users.map((user,i)=>{
                return (
                    <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td><img src={user.img_perfil} className="rounded" height='80' width='80' alt='foto usuario'/></td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.direccion}</td>
                        <td>{user.telefono}</td>
                        <td>{user.tipousuario}</td>
                    </tr>
                );
            });
        }


        return(
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='card'>
                                <div className='card-header'>
                                    <h4>Gestion de usuarios
                                        <Link to={'add-user'} className="btn btn-primary float-end">Agregar usuario</Link>
                                    </h4>
                                </div>
                                <div className='card-body'>
                                <table className="table table-striped table-border table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Imagen</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Direccion</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Tipo de usuario</th>

                        </tr>
                        </thead>
                        <tbody>
                            {user_HTMLTABLE}
                        </tbody>
                </table>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Crudusers