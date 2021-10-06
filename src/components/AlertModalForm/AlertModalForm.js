import './AlertModalForm.scss';
export default function AlertModalForm(props) {
    return (
        
        <div className="Alert-modal-container">
            <div className='Alet-modal-background'>
                <div className='Alert-modal'>
                    <div className='Box-Modal'>
                    {/* <div className='Button-Modal'>
                            <button onClick={props.closeModal}>X</button>
                        </div> */}
                        <div className='title-Modal'>
                            <h1 className="text">¡HOLA!</h1>
                            <button className="button" onClick={props.closeModal}>X</button>
                        </div>
                        <div className='paragraph-Modal'>
                            <p>Gracias por tu interés en Dr.tesis</p>
                            <p>Te enviaremos un correo para que conozcas</p>
                            <p>nuestras promociones y brindarte más información.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}