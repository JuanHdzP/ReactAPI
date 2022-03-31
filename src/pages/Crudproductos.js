import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class Crudproductos extends React.Component{
    
    state={
        productos:[],
        loading: true,
    }

    async componentDidMount(){
        const res = await axios.get('http://127.0.0.1:8000/api/productos');
        //console.log(res); 
        if(res.data.status===200){
            this.setState({
                productos: res.data.productos,
                loading: false,
            });
        }          
    }
    
    
    render(){
        
        var producto_HTMLTABLE = "";
        if(this.state.loading){
            producto_HTMLTABLE= 
            <tr>
                <td colSpan="6"><h3>Loading...</h3></td>
            </tr>;
        }else{
            producto_HTMLTABLE=
            this.state.productos.map((producto,i)=>{
                return (
                    <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td><img src={producto.foto} className="rounded" height='80' width='80' alt='foto producto'/></td>
                        <td>{producto.nombre}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.categoriaproducto}</td>
                        <td>
                        <Link to={{pathname:'/Detalleproducto', state:{id:producto.id}}}>
                        <button type='button' className='btn btn-primary'>Detalle</button>
                        </Link>                        
                        <Link to={{pathname:'/Modificaproducto', state:{id:producto.id}}}>
                        <button type='button' className='btn btn-dark'>Modificar</button>
                        </Link>
                        <Link to={{pathname:'/Eliminaproducto', state:{id:producto.id}}}>
                        <button type='button' className='btn btn-danger'>Eliminar</button>
                        </Link>
                        </td>    
                    </tr>
                );
            });
        }


        return(
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-10 mx-auto'>
                            <div className='card'>
                                <div className='card-header'>
                                    <h4>Gestion de productos
                                    <Link to={{pathname:'/Altaproducto'}}>
                                    <button type='button' className='btn btn-success float-end'>Agregar</button>
                                    </Link>
                                    </h4>
                                </div>
                                <div className='card-body'>
                                <table className="table table-striped table-border table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Foto</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Opciones</th>

                        </tr>
                        </thead>
                        <tbody>
                            {producto_HTMLTABLE}
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
export default Crudproductos