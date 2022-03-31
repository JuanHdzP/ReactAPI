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
                                    <h4>Gestion de tipos de usuario
                                        <Link to={'add-typeuser'} className="btn btn-primary float-end">Agregar tipo de usuario</Link>
                                    </h4>
                                </div>
                                <div className='card-body'>
                                <table className="table table-striped table-border table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            
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
                </div>
            </div>
        )
    }
}
export default Crudtypeusers