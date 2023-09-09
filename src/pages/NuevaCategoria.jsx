import { useState, useEffect } from 'react'
import ButtonForm from '../components/ButtonForm'
import CampoTexto from '../components/CampoTexto'
import '../css/estilos.css'
import TextArea from '../components/TextArea'
import CampoColor from '../components/CampoColor'
import { actualizarDatos, enviarDatos, obtenerDatos } from '../api/api'
import { v4 as uuidv4 } from 'uuid'
import TablaCategorias from '../components/TablaCategorias'

const NuevaCategoria = () =>{
    
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [color, setColor] = useState('')
    const [codigo, setCodigo] = useState('')
    const [idActualizar, setIdActualizar] = useState('11')

    const [videos, setVideos] = useState([])
    const [categorias,setCategorias] = useState([])

 
    const [solicitarDatos, setSolicitarDatos] = useState(false)
    
    useEffect(() => {
            obtenerDatos('/videos',setVideos)
            obtenerDatos('/categorias',setCategorias)
            setSolicitarDatos(false)
        },[solicitarDatos])
    
     const manejarLimpiar = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setNombre('')
            setDescripcion('')
            setColor('')
            setCodigo('')
    }

    const manejarEnvio = (e) => {
        e.preventDefault()
        
        const id = uuidv4()
        const datosAEnviar = {
            nombre,
            descripcion,
            color,
            codigo,
            id
        }

        if(categorias.some((categoria) => categoria.nombre.toLowerCase() === datosAEnviar.nombre.toLowerCase()))
        {
            const url = `'/categorias/${idActualizar}'`
            console.log(url)

            const datosAActualizar = {
                id: idActualizar,
                nombre,
                descripcion,
                color,
                codigo,
            }

            actualizarDatos(url,datosAActualizar)
            // alert('Ya existe una categoría con ese nombre, favor verificar en la tabla inferior')
        }else {
            console.log(datosAEnviar)
            enviarDatos('/categorias',datosAEnviar);
            setSolicitarDatos(true);
            manejarLimpiar()
        }

        
    }

    const manejarEditar = (id, nombre, descripcion, color, codigo) => {
        const formulario = document.querySelector('form')
        
        window.scrollTo({ top: 0, behavior: "smooth" });
        //formulario.scrollIntoView({ behavior: "smooth" });
        
       
            
        setNombre(nombre);
        setDescripcion(descripcion);
        setColor(color);
        setCodigo(codigo)


    }

    const EstilosBtnGuardar = {
        display: 'inline-block',
        color: '#ffffff',
        background: '#2A7AE4',
        fontSize: '21px',
        fontWeight: '600',
        width: '180px',
        height: '54px',
        borderRadius: '4px',
        border: 'none'
    }

    const EstilosBtnLimpiar = {
        display: 'inline-block',
        color: '#000000',
        background: '#9E9E9E',
        fontSize: '21px',
        fontWeight: '600',
        width: '180px',
        height: '54px',
        borderRadius: '4px',
        border: 'none'
    }

    return (
        <>
            <main className="nuevovideo">
                <div className="container">
                    <h2 className="nuevovideo__titulo">Nueva Categoría</h2>
                    <form className='form' action="" onSubmit={manejarEnvio}>
                        
                        <CampoTexto
                            id='txt1'
                            titulo='Nombre' 
                            error='' 
                            required 
                            valor={nombre}
                            actualizarValor={setNombre}    
                        />

                        <TextArea 
                            titulo='Descripción' 
                            error='' 
                            required
                            valor={descripcion}
                            actualizarValor={setDescripcion} 
                        />

                        <CampoColor 
                            titulo='Color' 
                            error='' 
                            required
                            valor={color}
                            actualizarValor={setColor}
                        />

                        <CampoTexto 
                            titulo='Código de seguridad' 
                            error='' 
                            required
                            valor={codigo}
                            actualizarValor={setCodigo}
                        />

                        <div className="botones">
                            <ButtonForm tipo='submit' titulo='Guardar' styles={EstilosBtnGuardar}/>
                            <ButtonForm tipo='reset' titulo='Limpiar' styles={EstilosBtnLimpiar} manejarClic={()=>manejarLimpiar()}/>
                        </div>

                    </form>

                    <TablaCategorias 
                        videos={videos}
                        categorias={categorias}
                        setSolicitarDatos={()=>setSolicitarDatos(true)}
                        manejarEditar={manejarEditar}
                    />

                </div>
            </main>
        </>
        
        
        
    )
    
}

export default NuevaCategoria