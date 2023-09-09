import { Link } from "react-router-dom"

const ButtonLink = ({titulo, styles, to}) =>{

    return ( 
        <Link to={to} style={styles}>
            {titulo}
        </Link>
    )    
}

export default ButtonLink