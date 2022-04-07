import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class Crudventas extends React.Component{
    
    state={
        ventas:[],
        loading: true,
    }

    async componentDidMount(){
        const res = await axios.get('http://127.0.0.1:8000/api/ventas');
        //console.log(res); 
        if(res.data.status===200){
            this.setState({
                ventas: res.data.ventas,
                loading: false,
            });
        }          
    }
    
    
    render(){
        
        var venta_HTMLTABLE = "";
        if(this.state.loading){
            venta_HTMLTABLE= 
            <tr>
                <td colSpan="5"><h3>Loading...</h3></td>
            </tr>;
        }else{
            venta_HTMLTABLE=
            this.state.ventas.map((venta,i)=>{
                return (
                    <tr key={i}>
                        <th scope="row">{venta.id}</th>
                        <td>{venta.fecha}</td>
                        <td>{venta.total}</td>
                        <td>{venta.cliente}</td>
                        <td>{venta.empleado}</td>
                        <td>
                        <Link to={{pathname:'/Eliminaventa', state:{id:venta.id}}}>
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
                        <div className='col-md-12'>
                            <div className='card'>
                                <div className='card-header'>
                                <h4>Gestion de ventas
                                    <Link to={{pathname:'/Altaventa'}}>
                                    <button type='button' className='btn btn-success float-end'>Agregar</button>
                                    </Link>
                                    </h4>
                                </div>
                                <div className='card-body'>
                                <table className="table table-striped table-border table-hover">
                    <thead>
                        <tr>
                            <th scope="col" WIDTH="100">Num venta</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Total</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Empleado</th>
                            <th scope="col">Opciones</th>

                        </tr>
                        </thead>
                        <tbody>
                            {venta_HTMLTABLE}
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
export default Crudventas