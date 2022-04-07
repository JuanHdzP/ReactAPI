import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class FeaturedProducts extends React.Component{
    
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
        
        var producto_CARD = "";
        if(this.state.loading){
            producto_CARD= 
            <tr>
                <td colSpan="6"><h3>Loading...</h3></td>
            </tr>;
        }else{
            producto_CARD=
            this.state.productos.map((producto,i)=>{
                return (
                    <div className='cardss'>
                    <img src={producto.foto} height='150' width='150' alt='foto producto' />
                    <h3>{producto.nombre}</h3>
                    <p>{producto.descripcion}</p>
                    <p>${producto.precio}</p>
                    <Link to={{pathname:'/Detalleproductoinicio', state:{id:producto.id}}}>
                    <button type='button' className='btn btn-primary'>Detalle</button>
                    </Link> 
                    </div>                                
                   
                );
            });
        }


        return(
            <div>
                <div className='container'>
                        <div className='col-10 mx-auto'>
                                    <h2 className='txt'>Productos                                    
                                    </h2>
                                <div className='item-container'>
                                    <div className='card-group'>
                            {producto_CARD}
                                    </div>
                            </div>                        
                            </div>
                    </div>
            </div>
        )
    }
}
export default FeaturedProducts