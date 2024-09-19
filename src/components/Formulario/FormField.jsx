import PropTypes from 'prop-types';


const FormField = ({ field, value, onChange }) => {
  return (
    <div>
        <label>{field.label}</label>
        <input
            type={field.type}
            name={field.name}
            value={value}
            onChange={onChange}
        />
    </div>
  )
}

//Definiendo los proptypes del FormField
FormField.propTypes = {
    field: PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
    }).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default FormField