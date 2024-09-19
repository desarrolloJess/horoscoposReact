import PropTypes from 'prop-types';
import './Card.css';


const Card = ({img, colorCard, titulo, rangoFechas, descripcion}) => {
  return (
    <div 
        className="card"
        style={{backgroundColor: `${colorCard}`}}
    >
        
        <h2 className='tituloCard'>{titulo}</h2>
        <img src={img} alt="lang-svg" />

        <h3 className='fechasCard'> {rangoFechas} </h3>
        <p className='descCard'> {descripcion} </p>
        
    </div>
  )
}

//Definiendo los proptypes del Card
Card.propTypes = {
    img : PropTypes.string,
    colorCard : PropTypes.string,
    titulo : PropTypes.string,
    rangoFechas : PropTypes.string,
    descripcion : PropTypes.string
}

export default Card