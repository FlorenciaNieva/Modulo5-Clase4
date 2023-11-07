import PropTypes from 'prop-types';

Card.propTypes = {
  producto: PropTypes,
  imagen: PropTypes,
  descripcion: PropTypes,
  precio: PropTypes,
	envioGratis: PropTypes,
};

function Card({producto, imagen, descripcion, precio, envioGratis}) {
  return (
    <div style={{ border: 'solid 1px white', padding: '20px', borderRadius: '20px', margin: '20px', width: '250px' }}>
      <h1 style={{ textAlign: 'center' }}>{producto}</h1>
      <img src={imagen} alt="not found" style={ { width:'100%',  }}/>
      <h4>Descripcion: {descripcion}</h4>
      <p>Precio: ${precio}</p>
			<p style={{ color: 'green' }}>{envioGratis ? `Envio Gratis` : ""}</p>
    </div>
    )
}

export default Card;