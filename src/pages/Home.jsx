import ListaCategorias from "../components/ListaCategorias"
import Hero from "../components/Hero"


const Home = () =>{

    return (
        <>  
            <Hero />
            <ListaCategorias url='/categorias'/>
        </>
    )
    
}

export default Home