import '../css/estilos.css'
import LogoMenu from "../img/LogoMenu.png"
import { Link } from 'react-router-dom'
import ButtonLink from './ButtonLink'

const Header = ()=> {

    const EstilosBtnNuevoVideo = {
          
            color: '#F5F5F5',
            backgroundColor: '#000000',
            border: '1px solid #F5F5F5',
            borderRadius: '4px',
            fontSize: '21px',
            fontWeight: '600',
            width: '180px',
            height: '54px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'

    }

    return(
        <header className='header'>
            <div className='header__contenido container'>
                <Link to="/">
                    <img className='header__imagen' src={LogoMenu} alt="Logo AluraFlix" />
                </Link>
                <nav className='header__nav'>
                    <ButtonLink to='/nuevovideo'
                        titulo='Nuevo Video'
                        styles={EstilosBtnNuevoVideo}
                    />
                </nav>
            </div>
        </header>
    )
}

export default Header