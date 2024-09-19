import DynamicForm from "../Formulario/DynamicForm";
import { useState } from 'react';
import Card from "../Card/Card";
import './HoroscopoFormulario.css'

const HoroscopoFormulario = () => {
    const [horoscopoData, setHoroscopoData] = useState(null);
    const [loading, setLoading] = useState(false);

    const formFields = [
        { name: 'fechaNacimiento', label: 'Fecha Nacimiento', type: 'date' }
    ];

    const calcularHoroscopo = (formData) => {
        setLoading(true);

        const fechaNacimiento = new Date(formData.fechaNacimiento);

        const signosZodiacales = {
            Capricornio: { 
                start: '12-22', 
                end: '01-19', 
                img: 'public/img/capricornio.png',
                description: 'Capricornio es conocido por su disciplina y ambición. Son líderes naturales y valoran la estabilidad.',
                rangoFecha: '22 de diciembre - 19 de enero'
            },
            Acuario: { 
                start: '01-20', 
                end: '02-18', 
                img: 'public/img/acuario.png', 
                description: 'Acuario es creativo y original. Les gusta pensar fuera de la caja y son defensores de la justicia.',
                rangoFecha: '20 de enero - 18 de febrero'
            },
            Piscis: { 
                start: '02-19', 
                end: '03-20', 
                img: 'public/img/piscis.png', 
                description: 'Piscis es intuitivo y emocional. Tienen una conexión profunda con el arte y la espiritualidad.',
                rangoFecha: '19 de febrero - 20 de marzo'
            },
            Aries: { 
                start: '03-21', 
                end: '04-19', 
                img: 'public/img/aries.png', 
                description: 'Aries es enérgico y valiente. Les encanta liderar y son pioneros en todo lo que hacen.',
                rangoFecha: '21 de marzo - 19 de abril'
            },
            Tauro: { 
                start: '04-20', 
                end: '05-20', 
                img: 'public/img/tauro.png', 
                description: 'Tauro es práctico y confiable. Les gusta la comodidad y tienen un gran aprecio por la belleza.',
                rangoFecha: '20 de abril - 20 de mayo'
            },
            Géminis: { 
                start: '05-21', 
                end: '06-20', 
                img: 'public/img/geminis.png', 
                description: 'Géminis es curioso y adaptable. Les encanta comunicarse y aprender sobre el mundo.',
                rangoFecha: '21 de mayo - 20 de junio'
            },
            Cáncer: { 
                start: '06-21', 
                end: '07-22', 
                img: 'public/img/cancer.png', 
                description: 'Cáncer es sensible y emocional. Son muy protectores con sus seres queridos y valoran la familia.',
                rangoFecha: '21 de junio - 22 de julio'
            },
            Leo: { 
                start: '07-23', 
                end: '08-22', 
                img: 'public/img/leo.png', 
                description: 'Leo es carismático y generoso. Les gusta ser el centro de atención y son líderes natos.',
                rangoFecha: '23 de julio - 22 de agosto'
            },
            Virgo: { 
                start: '08-23', 
                end: '09-22', 
                img: 'public/img/virgo.png', 
                description: 'Virgo es analítico y meticuloso. Tienen un gran sentido del detalle y les gusta ayudar a los demás.',
                rangoFecha: '23 de agosto - 22 de septiembre'
            },
            Libra: { 
                start: '09-23', 
                end: '10-22', 
                img: 'public/img/libra.png', 
                description: 'Libra es equilibrado y justo. Valoran la armonía y son excelentes mediadores en conflictos.',
                rangoFecha: '23 de septiembre - 22 de octubre'
            },
            Escorpio: { 
                start: '10-23', 
                end: '11-21', 
                img: 'public/img/escorpio.png', 
                description: 'Escorpio es apasionado y enigmático. Tienen una profundidad emocional que atrae a los demás.',
                rangoFecha: '23 de octubre - 21 de noviembre'
            },
            Sagitario: { 
                start: '11-22', 
                end: '12-21', 
                img: 'public/img/sagitario.png', 
                description: 'Sagitario es aventurero y optimista. Les encanta explorar y tienen un espíritu libre.',
                rangoFecha: '22 de noviembre - 21 de diciembre'
            },
        };
        
        const isDateInRange = (start, end) => {
            const startDate = new Date(`${fechaNacimiento.getFullYear()}-${start}`);
            const endDate = new Date(`${fechaNacimiento.getFullYear()}-${end}`);
            return fechaNacimiento >= startDate && fechaNacimiento <= endDate;
        };

        for (const [key, value] of Object.entries(signosZodiacales)) {
            if (isDateInRange(value.start, value.end)) {
                setHoroscopoData({
                    img: value.img,
                    titulo: key,
                    rangoFechas: value.rangoFecha,
                    descripcion: value.description,
                });
                break;
            }
        }
        setLoading(false); 
    };

    return (
        <>  
            <div className="contenedorHeader">
                <h1 className="tituloBienvenidos">Bienvenidos</h1>
                <h3 className="subtitulo">Horóscopo React</h3>
            </div>
            <div className="contenedorHoroscopos">
                <DynamicForm 
                    textoBoton="Ver Horóscopo"
                    formFields={formFields}  
                    onSubmit={calcularHoroscopo}
                />
                {loading && <p className="cargando">Cargando...</p>} {/* Mensaje de carga */}
                {horoscopoData && (
                    <Card 
                        img={horoscopoData.img}
                        colorCard="white"
                        titulo={horoscopoData.titulo}
                        rangoFechas={horoscopoData.rangoFechas}
                        descripcion={horoscopoData.descripcion}
                    />
                )}
            </div>
            
        </>
    );
};

export default HoroscopoFormulario;
