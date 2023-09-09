import '../css/estilos.css'
import { eliminarDatos} from '../api/api';



const TablaCategorias = ({videos, categorias, setSolicitarDatos, manejarEditar}) => {
    
    const manejarRemover = (url,nombreCategoria) => {
        if(videos.some( video => video.categorie === nombreCategoria)){
            alert(`¡NO SE PUEDE REMOVER LA CATEGORIA!\n *Existen videos asociados a la categoria "${nombreCategoria.toUpperCase()}".\n *Para remover la categoria primero elimine todos los videos relacionados.`)
        }else {
            eliminarDatos(url)
            alert('¡Categoria Eliminada!...')
            setSolicitarDatos(true)
        }
    }

    return (
        <table>
                        <thead>
                            <tr>
                                <td>Nombre</td>
                                <td>Descripción</td>
                                <td>Editar</td>
                                <td>Remover</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categorias.map((categoria, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{categoria.name}</td>
                                            <td>{categoria.description}</td>
                                            <td className="table__editar" ><button type='reset' className='table_btn' onClick={() => manejarEditar(categoria.id, categoria.name, categoria.description, categoria.color)}>Editar</button></td>
                                            <td className="table__remover"><button type='reset' className='table_btn' onClick={()=>manejarRemover(`/categories/${categoria.id}`,categoria.nombre)}>Remover</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
    );
}

export default TablaCategorias