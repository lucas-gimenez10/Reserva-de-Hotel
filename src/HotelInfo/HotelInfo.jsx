import "./HotelInfo.css";
import { ConversorFecha } from "../Header/Header";

// Componente que renderiza la Card de un Hotel

export function HotelInfo(props) {
  // Funcion que asigna signos $ a cada card de Hotel
  const precios = () => {
    let signoPeso = <i className="fas fa-dollar-sign iconoPeso"></i>;
    let arregloPrecio = [];
    for (let i = 0; i < props.price; i++) {
      arregloPrecio.push(signoPeso);
    }
    return arregloPrecio;
  };

  return (
    <div className="card">
      <img src={props.photo} alt="Imagen Hotel" />
      <div className="cardTexto">
        <h3 className="tituloCard">{props.name}</h3>
        <p>{props.description}</p>
        <p className="parrafoFecha">
          Disponible Desde: <ConversorFecha fecha={props.availabilityFrom} />
        </p>
        <p className="parrafoFecha">
          Disponible hasta: <ConversorFecha fecha={props.availabilityTo} />
        </p>
        <div className="contenedorLocation">
          <div className="contenedorIcono">
            <i className="fas fa-map-marker icono"></i>
          </div>
          <p className="locationText">
            {props.city}, {props.country}
          </p>
        </div>

        <div className="contenedorLocation">
          <div className="contenedorHabitaciones">
            <i className="fas fa-bed icono"></i>
          </div>
          <p className="locationText">{props.rooms} Habitaciones</p>
          <div className="contenedorPrecio">{precios()}</div>
        </div>
      </div>
      <button className="botonReserva">Reservar</button>
    </div>
  );
}
