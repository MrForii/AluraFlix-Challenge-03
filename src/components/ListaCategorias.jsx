import VideoCard from "./VideoCard"
import { obtenerDatos } from "../api/api"
import { useEffect, useState } from "react"

const ListaCategorias = () => {
    const [categorias,setCategorias] = useState([])
    const [videos,setVideos] = useState([])

    useEffect(()=>{
        obtenerDatos('/categorias',setCategorias)
        obtenerDatos('/videos',setVideos)
    },[])

    return (
        <main className="categorias">
            <h1 className="sr-only">Lista Categorias videos</h1>
            <p className="sr-only">AluraFlix plataforma para registrar y ver nuestros videos favoritos</p>
            <div className="categorias_Listas">
                {
                    categorias.map((categoria) => {

                        const {id, nombre, descripcion, color} = categoria

                        if (videos.some( video => video.categoria === nombre)){
                            let colorLista = {
                                backgroundColor: color
                            }
    
                            return (
                                    <div className="categorias__contenido container" key={id}>
                                        <div className="categorias__titulo">
                                            <div className="categorias__nombre" style={ colorLista }>{ nombre }</div>
                                            <div className="categorias__descripcion">{ descripcion }</div>
                                        </div>
                                        <div className="categorias__listavideos">
    
                                            <VideoCard url='/videos' nombreCategoria={nombre} color={ color }/>
                                            
                                        </div>
                                    </div>
                            );
                        }
                    })
                }
            </div>
        </main>
    )
}

export default ListaCategorias