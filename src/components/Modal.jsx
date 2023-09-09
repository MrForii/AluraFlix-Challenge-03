import '../css/estilos.css'

const Modal = ({ children, onSubmit, onCancel, onClose}) => {
    return (
        <div className='modal-container' onClick={() => onClose()}>
            <div className='modal'>
                <div className='modal-header'>
                    <p className='modal-close' onClick={()=> onClose()}>X</p>
                </div>
                <div className='modal-content'>
                    { children }
                </div>
                <div className='modal-footer'>
                    <button className='btn btn-submit' onClick={()=> onSubmit()}>Aceptar</button>
                    <button className='btn btn-cancel'  onClick={()=> onSubmit()}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default Modal