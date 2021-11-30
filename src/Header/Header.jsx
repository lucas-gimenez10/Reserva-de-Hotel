import React from "react";
import "./Header.css";

export function Header(props) {
  return (
    <>
      <div className="contenedor">
        <h1>
          <a href="https://n4q4p.csb.app/">Reserva de Hoteles</a>
        </h1>
        <div className="textosHeader">
          <p>
            Fecha Desde : <ConversorFecha fecha={props.fechaDesde} />
          </p>
          <p>
            Fecha Hasta: <ConversorFecha fecha={props.fechaHasta} />
          </p>
          <p>Pais: {props.pais}</p>
          <p>Tamaño: {props.tamanio} </p>
          <p>
            Costo: <ConversorCosto costo={props.costo} />
          </p>
        </div>
      </div>
    </>
  );
}

export const ConversorFecha = (props) => {
  let fecha = new Date(props.fecha);
  if (props.fecha === "") {
    return "Todas";
  } else {
    const options = {
      timeZone: "UTC",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    return fecha.toLocaleDateString("es-Es", options);
  }
};

const ConversorCosto = (props) => {
  let string = "";
  switch (props.costo) {
    case "1":
      string = "Económico";
      break;

    case "2":
      string = "Confort";
      break;

    case "3":
      string = "Lujos";
      break;

    case "4":
      string = "Magnífico";
      break;

    default:
      string = "Todos";
      break;
  }
  return string;
};
