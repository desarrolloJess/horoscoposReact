import FormField from "./FormField";
import PropTypes from 'prop-types';
import { useState,useEffect } from 'react';
import './DynamicForm.css'

const DynamicForm = ({textoBoton,formFields,onSubmit}) => {

    const [formData, setFormData] = useState({});
    const [isValid, setIsValid] = useState(false);

    const validateForm = () => {
        /*
            NOTA: 
            El método "every" es una función de los arrays en JavaScript que verifica si todos 
            los elementos en un array cumplen con una condición específica
        */
        const isValid = formFields.every(field => formData[field.name]);
        setIsValid(isValid);
    };

    /*
        NOTA:
            ⦿ "useEffect" : es un hook en React que permite manejar efectos secundarios en componentes funcionales.
            ⦿ "Hook" :      Una función especial que permite usar características de React como estado y ciclo de 
                             vida en componentes funcionales.
    */

    useEffect(() => {
        validateForm(); 
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };    

    const handleSubmit = (e) => {
        e.preventDefault(); 
        onSubmit(formData);
    };

  return (
    <div className="contenedorFormulario">
        <form onSubmit={handleSubmit}>
            {formFields.map((field) => (
                <FormField
                    key={field.name}
                    field={field}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                />
            ))}
            <button className="btnSubmit" type="submit" disabled={!isValid}>{textoBoton}</button>
        </form>
    </div>    
  )
}

//Definiendo los proptypes del Formulario
DynamicForm.propTypes = {
    textoBoton : PropTypes.string,
    formFields: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
        })
    ).isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default DynamicForm