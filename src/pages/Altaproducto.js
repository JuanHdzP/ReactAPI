import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Altaproducto extends React.Component{
    state={
        nombre:'',
        precio:'',
        foto:'',
        descripcion:'',
        categoria_id:'',
        categorias:[],
        resultado:'',
    }

    campoChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    async componentDidMount(){
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
            nombre:this.state.nombre,
            precio:this.state.precio,
            foto:this.state.foto,
            descripcion:this.state.descripcion,
            categoria_id:this.state.categoria_id,
        };

        fetch('http://127.0.0.1:8000/api/productos',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json',
            },
            mode:"cors",
            body:JSON.stringify(data)
        })
        .then(response=>response.json())
        .then(response=>this.setState({resultado:"Alta producto exitosa!!!"}))

    }

    render(){
        return(
            <div>
                    <div className="container">
                        <div className="col-md-4 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <center>
                                    <h4 >Alta producto
                                    <Link to={{pathname:'/Crudproductos'}}>
                                    <button type='button' className='btn btn-success float-end'>Volver</button>
                                    </Link></h4> 
                                    </center>
                                        
                                </div>
                                <div className="card-body">
                                <form onSubmit={this.subForm}>                                   

                                    <div className="form-group mb-3">
                                        <label>Nombre</label>
                                        <input type='text' name="nombre" className="form-control" onChange={this.campoChange}/>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Precio</label>
                                        <input type='text' name="precio" className="form-control" onChange={this.campoChange}/>
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <label>Foto</label>
                                        <input type='text' name="foto" className="form-control" onChange={this.campoChange}/>
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <label>Descripción</label>
                                        <input type='text' name="descripcion" className="form-control" onChange={this.campoChange}/>
                                    </div>

                                    <div className="form-group mb-3">
                                    <label>
                                    Seleccione categoria 
                                    </label>
                                    <select name="categoria_id" className="form-control" onChange={this.campoChange}>
                                        {this.state.categorias.map((categoria,i)=>
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
                                    :<div></div>}
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

export default Altaproducto