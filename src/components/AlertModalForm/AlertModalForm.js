import { useState } from "react";
import { useHistory } from "react-router-dom";
import './AlertModalForm.scss';
export default function AlertModalForm(props) {
    const [modalIsOpen, setModalIsOpen] = useState(true)
    return (
        
        <div className="Alert-modal-container">
            <div className='Alet-modal-background'>
                <div className='Alert-modal'>
                    <div className='Box-Modal'>
                    <div className='Button-Modal'>
                            <button onClick={() => setModalIsOpen(false)}>cerrar</button>
                        </div>
                        <div className='title-Modal'>
                            <h1>¡HOLA!</h1>
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