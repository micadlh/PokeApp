const Card = ({id, img, name, types, evol}) => {
    return (
    <div className="tarjeta">
    <div className="arriba2">
      <img
        src={img}
      />
      <p><b>ID / {id}</b></p>
    </div>
    <div className="abajo">
      <h3>{name}</h3>
      <ul type="none" id="caca">
        <li>{types}</li>
      </ul>
      <div className="p">
        <p className="p1">Evoluciona de:</p>
        <div className="p2">{evol}</div>
      </div>
    </div>
  </div>)
}

export default Card