import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Modificaproducto extends React.Component{
    state={
        productos:{
            nombre:'',
            precio:'',
            foto:'',
            descripcion:'',
            categoria_id:'',
        },
        isFetch:true,
        categorias:[],
        resultado:'', 
    }

    handleChange = async e=>{
        e.persist();
        await this.setState({
            productos:{
                ...this.state.productos,
                [e.target.name]:e.target.value
            }
        })   
    }

    async componentDidMount(){
            fetch('http://127.0.0.1:8000/api/productos/'+this.props.location.state.id)
            .then(response=>response.json())
            .then(productosJson=>this.setState({productos:productosJson, isFetch:false}))

        const res = await axios.get('http://127.0.0.1:8000/api/categorias');
        console.log(res); 
        if(res.data.status===200){
            this.setState({
                categorias: res.data.categorias                
            });
        }         
    }

    subForm=(e)=>{
        e.preventDefault();
        let data= {
            nombre:this.state.productos.nombre,
            precio:this.state.productos.precio,
            foto:this.state.productos.foto,
            descripcion:this.state.productos.descripcion,
            categoria_id:this.state.productos.categoria_id,
        };

        fetch('http://127.0.0.1:8000/api/productos/'+this.props.location.state.id,{
            method:'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json',
            },
            mode:"cors",
            body:JSON.stringify(data)
        })
        .then(response=>response.json())
        .then(response=>this.setState({resultado:"Producto modificado!!!"}))
    }


    render(){
        const {isFetch, productos, categorias}=this.state
        if(isFetch){
            return ("No se puedo conectar a la API")
        }
        return(
            <div>
                <div className="container">
                        <div className="col-md-4 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <center>
                                    <h4 >Modificar producto
                                    <Link to={{pathname:'/Crudproductos'}}>
                                    <button type='button' className='btn btn-success float-end'>Volver</button>
                                    </Link></h4> 
                                    </center>
                                        
                                </div>
                                <div className="card-body">
                                <form onSubmit={this.subForm}>                                   

                                    <div className="form-group mb-3">
                                        <label>Nombre</label>
                                        <input type='text' name="nombre" value={productos.nombre} onChange={this.handleChange} className="form-control"/>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Precio</label>
                                        <input type='text' name="precio" value={productos.precio} onChange={this.handleChange} className="form-control"/>
                                    </div>

                                    <center>
                                    <img src={productos.foto} width='100' height='100' alt="foto
                                    producto"/>
                                    </center>
                                    
                                    <div className="form-group mb-3">
                                        <label>Foto</label>
                                        <input type='text' name="foto" value={productos.foto} onChange={this.handleChange} className="form-control"/>
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <label>Descripción</label>
                                        <input type='text' name="descripcion" value={productos.descripcion} onChange={this.handleChange} className="form-control"/>
                                    </div>

                                    <div className="form-group mb-3">
                                    <label>
                                    Seleccione categoria 
                                    </label>
                                    <select name="categoria_id" onChange={this.handleChange} className="form-control" >
                                        <option value={productos.categoria_id}>{productos.categoriaproducto}</option>
                                        {categorias.map((categoria,i)=>
                                        (<option value={categoria.id} key={i}>
                                            {categoria.nombre}
                                        </option>
                                        ))}
                                    </select>                                    
                                    </div>

                                    <center>
                                    <div className="form-group mb-3">
                                        <input type="submit" value="Guardar" className="btn btn-primary btn-lg"/>
                                    </div>
                                    </center>                                                                                     
                                </form>   
                                <center>
                                <div>
                                    {this.state.resultado
                                    ? <div className="alert alert-success">{this.state.resultado}</div>
                                    : <div></div>}
                                </div>    
                                </center>
                                
                                </div>
                            </div>
                        </div>
                    </div>             
            </div>
        )
    }
}

export default Modificaproducto