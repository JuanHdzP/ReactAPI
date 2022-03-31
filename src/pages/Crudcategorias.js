import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class Crudcategorias extends React.Component{
    
    state={
        categorias:[],
        loading: true,
    }

    async componentDidMount(){
        const res = await axios.get('http://127.0.0.1:8000/api/categorias');
        console.log(res); 
        if(res.data.status===200){
            this.setState({
                categorias: res.data.categorias,
                loading: false,
            });
        }          
    }
    
    
    render(){
        
        var categoria_HTMLTABLE = "";
        if(this.state.loading){
            categoria_HTMLTABLE= 
            <tr>
                <td colSpan="3"><h3>Loading...</h3></td>
            </tr>;
        }else{
            categoria_HTMLTABLE=
            this.state.categorias.map((categoria,i)=>{
                return (
                    <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>{categoria.nombre}</td>
                                            
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
                                    <h4>Gestion de categorias
                                        <Link to={'add-categoria'} className="btn btn-primary float-end">Agregar categoria</Link>
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
                            {categoria_HTMLTABLE}
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
export default Crudcategorias