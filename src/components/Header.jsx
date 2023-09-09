import '../css/estilos.css'
import LogoMenu from "../img/LogoMenu.png"
import { Link } from 'react-router-dom'
import ButtonLink from './ButtonLink'

const Header = ()=> {

    return(
        <header className='header'>
            <div className='header__contenido container'>
                <Link to="/">
                    <img className='header__imagen' src={LogoMenu} alt="Logo AluraFlix" />
                </Link>
                <nav className='header__nav header__btn'>
                    <ButtonLink to='/nuevovideo'
                        titulo='Nuevo Video'
                    />
                </nav>
            </div>
        </header>
    )
}

export default Header