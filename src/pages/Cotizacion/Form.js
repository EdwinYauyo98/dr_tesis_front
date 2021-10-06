import student from "../../assets/imgs/Form_student.png";
import './Form.scss'
export default function Cotizacion(props) {
    return (

        <div className="form-block">
            <div className="left-container">
                <div className="img-container">
                    <img className="student" src={student} alt="" />
                </div>
            </div>

            <div className="right-container">
                <div className="data-container">
                    <div className="titulo">
                        <h1>Solicita una cotización</h1>
                    </div>
                    <div className="row-around">

                        <input className="input-type-1" type="text" placeholder="*Nombre" id="name" />


                        <input className="input-type-1" type="text" placeholder="*Apellido" id="lastname" />

                    </div>
                    <div className="row-center">

                        <input className="input-type-2" type="text" placeholder="*Correo Electronico" id="email" />


                    </div>
                    <div className="row-around">

                        <input className="input-type-1" type="text" placeholder="*Telefono" id="phone" />


                        <select className="input-type-1" placeholder="*Pais" name="*Pais" id="country">
                            <option value="" disabled selected hidden>*Pais</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Brasil">Brasil</option>
                            <option value="Chile">Chile</option>
                            <option value="Peru">Peru</option>
                            <option value="Otro">Otro</option>
                        </select>


                    </div>
                    <div className="row-center">

                        <select className="input-type-2" name="*Tipo de requerimiento" id="request">
                            <option value="" disabled selected hidden>*Tipo de requerimiento</option>
                            <option value="Correciones,estilo y/o normativa">Correciones,estilo y/o normativa</option>
                            <option value="Proyecto de tesis">Proyecto de tesis</option>
                            <option value="Estadisticas">Estadisticas</option>
                            <option value="Tesis">Tesis</option>
                            <option value="Pack Proyecto de tesis + tesis">Pack Proyecto de tesis + tesis</option>
                            <option value="Otro">Otro</option>
                        </select>


                    </div>
                    <div className="row-center">

                        <select className="input-type-2" name="Especialidad" id="carreer">
                            <option value="" disabled selected hidden>Especialidad</option>
                            <option value="Administracion">Administracion</option>
                            <option value="Arquitectura">Arquitectura</option>
                            <option value="Ingenieria">Ingenieria</option>
                            <option value="Derecho">Derecho</option>
                            <option value="Otro">Otro</option>
                        </select>

                    </div>
                    <div className="row-center">

                        <select className="input-type-2" placeholder="Universidad/Organizacion" name="Universidad/Organizacion" id="university">
                            <option value="" disabled selected hidden>Universidad/Organizacion</option>
                            <option value="Pontificia Universidad Catolica del Peru">Pontificia Universidad Catolica del Peru</option>
                            <option value="Universidad Peruana Cayetano Heredia">Universidad Peruana Cayetano Heredia</option>
                            <option value="Universidad del Pacifico">Universidad del Pacifico</option>
                            <option value="Universidad de Lima">Universidad de Lima</option>
                            <option value="Universidad San Martin de Porres">Universidad San Martin de Porres</option>
                            <option value="Universidad Inca Garcilazo de la Vega">Universidad Inca Garcilazo de la Vega</option>
                            <option value="Universidad Ricardo Palma">Universidad Ricardo Palma</option>
                            <option value="Universidad Peruana de Ciencias Aplicadas">Universidad Peruana de Ciencias Aplicadas</option>
                            <option value="Universidad San Ignacion de Loyola">Universidad San Ignacion de Loyola</option>
                            <option value="Universidad Tecnologica del Peru">Universidad Tecnologica del Peru</option>
                            <option value="Universidad Cientifica del Sur">Universidad Cientifica del Sur</option>
                            <option value="Otro">Otro</option>
                        </select>



                    </div>
                    <div className="row-around">

                        <select className="input-type-1" name="" id="monthDiscount">
                            <option value="" disabled selected hidden>Descuento del mes</option>
                            <option value="Enero">Enero</option>
                            <option value="Febrero">Febrero</option>
                            <option value="Marzo">Marzo</option>
                            <option value="Abril">Abril</option>
                            <option value="Mayo">Mayo</option>
                            <option value="Junio">Junio</option>
                            <option value="Julio">Julio</option>
                            <option value="Agosto">Agosto</option>
                            <option value="Septiembre">Septiembre</option>
                            <option value="Octubre">Octubre</option>
                            <option value="Noviembre">Noviembre</option>
                            <option value="Diciembre">Diciembre</option>
                        </select>

                        <input className="input-type-1" type="text" placeholder="Codigo de descuento" id="discountCode" />


                    </div>
                    <div className="row-center">

                        <select className="input-type-2" name="Tiempo de entrega" id="time">
                            <option value="" disabled selected hidden>Tiempo de entrega</option>
                            <option value="1 semana">1 semana</option>
                            <option value="2 semanas">2 semanas</option>
                            <option value="3 semanas">3 semanas</option>
                            <option value="4 semanas">4 semanas</option>
                            <option value="5 semanas">5 semanas</option>
                            <option value="6 semanas">6 semanas</option>
                            <option value="7 semanas">7 semanas</option>
                            <option value="8 semanas">8 semanas</option>
                            <option value="+ de 8 semanas">+ de 8 semanas</option>
                        </select>

                    </div>
                    <div className="row-center">

                        <input className="input-type-2" type="text" placeholder="Ajunta tu estructura y/o avance" id="structure" />


                    </div>
                    <div className="row-center">

                        <input className="input-type-2" type="text" placeholder="*Detalles adicionales" id="details" />

                    </div>
                    <div className="row-center">
                        <button className="boton" onClick={props.openModal}>
                            <h3 className="text">Enviar</h3>
                        </button>
                    </div>

                </div>


            </div>

        </div>

    )

}