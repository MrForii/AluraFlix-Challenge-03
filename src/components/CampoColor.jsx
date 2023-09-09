import '../css/estilos.css'

const CampoColor = ({titulo, required, error, valor, actualizarValor }) => {
    
    const manejarCambio = (e) => {
        console.log('cambio',e.target.value)
        actualizarValor(e.target.value)
    }

    return (
        <div className="form__input ">
            <div className="form__input inputbackground">
            <label className='form__label' htmlFor="">{titulo}</label>
        <input
            required={required}
            type='color'
            value={valor}
            onChange={manejarCambio}
        />
        </div>
            <span className="form__mensaje">{error}</span>
        </div>
   )
}

export default CampoColor