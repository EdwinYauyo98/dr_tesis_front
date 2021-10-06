import React from 'react'
import './SecondComponent.scss'
import Check from '../../../assets/imgs/Faqs/check.png'
export default function SecondComponent() {
    return (
        <div className="FaqsSecondComponent">

            <div className="firstSubComp">
                <h3 className="littleTitle">SOPORTE AUTOSERVICIO DE DR.TESIS</h3>
                <h1 className="title">¿Dónde se encuentran sus  oficinas?</h1>
                <p>Nos pueden encontrar en las siguientes direcciones previa cita:<br />
                    - Av. Tupac Amaru 210 Apartado 1301, Rímac, Lima 15333, Perú<br />
                    - Av. Gacilaso de la Vega 1652, Cercado, Lima 15046, Perú<br />
                    - Av. Juan de Arona 755, San Isidro, Lima 15046, Perú</p>
            </div>
            <div className="firstSubComp">
                <h1 className="title">¿Qué tipo de servicios ofrecen?</h1>
                <p>Los servicios que ofrecemos se dividen en dos tipos:</p>
                <p className="indent"><img src={Check} alt="" /> Asesoría y capacitación</p>
                <p className="indentRight">- Mi asesor personal (presencial y virtual)<br />
                    - Talleres prácticos (grupos mayores a 5 participantes)<br />
                    - Congresos (periódicamente de forma bimestral)</p>

                <p className="indent"><img src={Check} alt="" /> Desarrollo y resolución</p>
                <p className="indentRight">- Tesis
                    - Estadísticas<br />
                    - Plan de tesis<br />
                    - Monografías y/o Ensayos<br />
                    - Revisión sistemática y parafraseo<br />
                    - Evaluación de proyectos de inversión<br />
                    - Revisión e informe de grado de similitud<br />
                    - Diseño y elaboración de instrumento y/o matriz de consistencia<br />
                    - Título, determinación de variables y matriz de operacionalización<br />
                    - Correción según estilo y/o normativa (ACS, APA, Harvard y Vancouver)</p>
            </div>
            <div className="firstSubComp">
                <h1 className="title">¿Tesis de qué carreras realizan?</h1>
                <p>Si bien es cierto iniciamos asesorando y desarrollando tesis para las
                    carreras de ingeniería ya que nuestro equipo fundador estaba conformado
                    por profesionales de la UNI, en la actualidad contamos con un staff de
                    profesionales multidisciplinario el cual nos permite desarrollar en su
                    totalidad cada carrera profesional tales como derecho, contabilidad,
                    economía, administración, arquitectura, medicina, biología, zootecnia entre
                    otros.</p>
            </div>
            <div className="firstSubComp">
                <h1 className="title">
                    ¿Cuánto tiempo tarda en realizar una
                    investigación?</h1>
                <p>El tiempo estimado para el desarrollo de una investigación (ya sea
                    plan de tesis, tesis, monografía u otro) tiene como promedio 100 h
                    académicas (el tiempo real dependerá del tema en particular que sea
                    borde y su grado de dificultad), este tiempo se distribuye en 5 semanas
                    el cual es el plazo de entrega estimado para nuestros requerimientos.<br />
                    <br />
                    &ensp;&ensp; Pd. El tiempo mencionado anteriormente es el tiempo normal, sin
                    embargo, podemos reducir este tiempo de manera razonable según la
                    premura del graduando (ello también incurrirá en un aumento de
                    horas/hombre en el proyecto y obviamente un incremento en el
                    presupuesto).</p>
            </div>
            <div className="firstSubComp">
                <h1 className="title">
                    ¿Cuál es el precio de la tesis?</h1>
                <p>Para que tenga una idea de a inversión que realizaría, el cálculo del
                    presupuesto se realiza del siguiente modo.</p>
                <p className="indentRight"><img src={Check} alt="" /> Primero: Se evalúa la línea de investigación, el tema en particular y de
                    acuerdo a ello se asigna un profesional de la especialidad en estudio, éste
                    tiene un rango de precios definido por hora entre S/. 30 - S/. 70.</p>
                <p className="indentRight"><img src={Check} alt="" /> Segundo: Se evalúa el tiempo para el desarrollo según el grado de
                    dificultad, metodología y otros detalles, así como la disponibilidad y/o
                    premura del graduando. El tiempo estimado para una investigación varía
                    entre 80h a 140h dependiendo el desarrollo. Adicionalmente a ello se
                    aplican los descuentos o promociones del mes.</p>
                
                <p >Ejemplo:<br />
                    Tema: Algoritmo de red neuronal para el reconocimiento de imágenes.<br />
                    Especialista: Mecatrónico (S/.50)<br />
                    Tiempo: 100h<br />
                    Presupuesto: 50x100=5000<br />
                    Descuento del mes: 30%<br />
                    Precio final: 5000x0.70=3500</p>
            </div>
            <div className="firstSubComp">
                <h1 className="title">¿Cuál es la modalidad de pago?</h1>
                <p>La modalidad de pago es del 50% para iniciar el desarrollo de la
                    investigación y el otro 50% distribuido en 4 partes (contra entrega) según el
                    cronograma de entregables que se le envía, hasta finalizar la investigación,
                    lo cual tiene una vigencia hasta la total aprobación por su revisor como se
                    especifíca en el contrato.</p>
            </div>
            <div className="firstSubComp">
                <h1 className="title">¿Formas de pago?</h1>
                <p>Vía transferencia bancaria o abonos a nuestro números de cuenta
                    del representante legal en los bancos BCP, BBVA, Scotiabank, Interbank y
                    Banco de la Nación. Adicional a ello actualmente solo aceptamos tarjetas de
                    crédito del banco Interbank debido a nuestra nueva alianza estratégica.</p>
            </div>
            <div className="firstSubComp">
                <h1 className="title">¿Cuál es la garantía que me ofrecen?</h1>
                <p>Manejamos un contrato de prestación de servicios, en el cual se
                    detallan todos los alcances, condiciones y tiempo de entrega entre otras
                    especificaciones, así como los detalles de la tarea a desarrollar, indicando
                    que, de incumplirse los alcances y acuerdos especificados en dicho contrato,
                    todo litigio o controversia, derivados o realicionados con este acto jurídico
                    se resolverá por la vía legal. Es por ello que antes de realizar cualquier
                    trabajo o colaboración con algún cliente se exige la firma y validación del
                    contrato de ambas partes, tanto del cliente como el representante legal de
                    nuestra institución.<br />
                    <br />

                    &ensp;&ensp;Pd. De ser el caso en el cual el cliente se encuentra en una localidad
                    distinta a la ubicación de nuestras oficinas o le resulte complicado
                    apersonarse, le enviamos vía courrier a su domicilio el documento por
                    duplicado y firmado por nuestro representante legal (previa revisión y
                    aprobación de alcances por ambas partes) para que la otra parte realice la
                    firma y se envíe de regreso el ejemplar correspondiente.</p>
            </div>
            <div className="firstSubComp">
                <h1 className="title">Si mi tesis es rechazada, ¿Se reembolsará
                    el pago que realice?</h1>
                <p>Las investigaciones de tesis, plan de tesis, monografía o cualquier
                    otro que elaboramos, tienen un periodo de revisión y correción según las
                    observaciones que realice su revisor y/o asesor hasta su plena aprobación
                    según lo especifica nuestro contrato.Por otro lado, la aceptación o rechazo de la investigación
                    desarrollada en la etapa de sustentación ante un jurado, es responsabilidad
                    total del cliente, ya que dependerá del estudio que haya realizado del
                    contenido de la investigación entregada y la explicación que realice el día
                    de su presentación , por ello resulta obvio que no habría algún reembolso.</p>
            </div>
        </div>
    )
}
