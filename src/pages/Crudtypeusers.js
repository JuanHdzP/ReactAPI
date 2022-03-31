import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class Crudtypeusers extends React.Component{
    
    state={
        typeusers:[],
        loading: true,
    }

    async componentDidMount(){
        const res = await axios.get('http://127.0.0.1:8000/api/typeusers');
        console.log(res); 
        if(res.data.status===200){
            this.setState({
                typeusers: res.data.typeusers,
                loading: false,
            });
        }          
    }
    
    
    render(){
        
        var typeuser_HTMLTABLE = "";
        if(this.state.loading){
            typeuser_HTMLTABLE= 
            <tr>
                <td colSpan="2"><h3>Loading...</h3></td>
            </tr>;
        }else{
            typeuser_HTMLTABLE=
            this.state.typeusers.map((typeuser,i)=>{
                return (
                    <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>{typeuser.nombre}</td>  
                        <td>
                        <Link to={{pathname:'/Eliminatypeuser', state:{id:typeuser.id}}}>
                        <button type='button' className='btn btn-danger'>Eliminar</button>
                        </Link>
                        </td>                      
                    </tr>
                );
            });
        }


        return(
            <div>
                <center>

                <div className='container'>
                        <div className='col-md-5'>
                            <div className='card'>
                                <div className='card-header'>
                                    <h4>Gestion de tipos de usuario
                                        <Link to={'add-typeuser'} className="btn btn-primary float-end">Agregar</Link>
                                    </h4>
                                </div>
                                <div className='card-body'>
                                <table className="table table-striped table-border table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Opciones</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                            {typeuser_HTMLTABLE}
                        </tbody>
                </table>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </center>
            </div>
        )
    }
}
export default Crudtypeusers