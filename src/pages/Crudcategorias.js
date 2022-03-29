import React from 'react';

class Crudcategorias extends React.Component{

    state = {
        categorias:[]
    }
    componentDidMount(){
        fetch("http://localhost:8000/api/categorias")
        .then(response => response.json())
        .then(categoriasJson => this.setState({categorias:categoriasJson}))
    }
    
    render(){
        const {categorias}=this.state
        const categoriasArr = Object.values(categorias).map(value => value);
        
        return(
            <div>
                <h1>Gestion categorias</h1>

                <br/>
                <table className="table table-striped table-border table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                        </tr>
                        </thead>
                        <tbody>
                            {categoriasArr.map((categoria,i)=>
                            <tr key={i}>
                                <th scope="row">{i+1}</th>
                                <td>{categoria.nombre}</td>
                            </tr>
                            )}
                        </tbody>
                </table>
            </div>
        )
    }
}
export default Crudcategorias