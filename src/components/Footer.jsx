import { Link } from 'react-router-dom'
import '../css/estilos.css'
import LogoAluraFlix from '../img/LogoFooter.png'
import ButtonLink from './ButtonLink'



const Footer = () =>{
    
    const estilos = {
        color: '#F5F5F5',
        backgroundColor: '#2A7AE4',
        width: '100%',
        display: 'flex',
        fontSize: '21px',
        fontWeight: '600',
        flexdirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 0'
    }    

    return (
        <footer>
                <div className='footer__div'>
                    <ButtonLink id='footer__btn' className='footer__btn' to='' titulo='Nuevo Video' styles={estilos}/>
                </div>
                
                <img className='footer__logo' src={LogoAluraFlix} alt="Logo AluraFlix" />
                <p className='footer__parrafo'><strong className='footer__span'>AluraFlix</strong> por <Link to='www.linkedin.com/in/rodrigo-valdez7' target='_blank'><span className='footer__span'>Rodrigo Valdez</span></Link></p>
        </footer>
    )
}

export default Footer