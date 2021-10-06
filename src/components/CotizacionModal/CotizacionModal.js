import DrTesis from '../../assets/imgs/Mono dr tesis@1-1200x1200 1.png';
import { useHistory } from "react-router-dom";
import './CotizacionModal.scss';
export default function CotizacionModal(props) {
    const history = useHistory();
    return (
        <div className="cotization-modal-container">
            <div className='modal-background'>
                <div className='modal'>
                    <div className='first-row'>
                        <img src={DrTesis}></img>
                    </div>
                    <div className='second-row'>
                        <div className='title'>
                            Dr. Tesis
                        </div>
                        <div className='paragraph'>
                            Dr. Tesis es la solución que buscas<br />
                            en asesoría, capacitación, y<br />
                            evaluación personalizada para la<br />
                            elaboración de tu tesis.<br />
                        </div>
                        <div className='button'>
                            <button onClick={() => {
                                props.closeModal();
                                history.push("/form");
                                window.scrollTo(0, 0);
                            }}
                            >Solicita tu cotización</button>
                        </div>
                    </div>
                    <div className='third-row'>
                        <input type='text' className='name' placeholder='*Nombre'></input>
                        <input type='text' className='lastname' placeholder='*Apellido'></input>
                        <input type='text' className='email' placeholder='*Correo Electrónico'></input>
                        <input type='text' className='cellphone' placeholder='*Teléfono'></input>
                    </div>
                </div>
            </div>
        </div>

    )
}