import React from "react";
import { hotelsData } from "../scripts/data";
import { HotelInfo } from "../HotelInfo/HotelInfo";
import "./Hoteles.css";

export function Hoteles(props) {
  const hotelesFiltradoPorPais = hotelsData.filter((hotel) => {
    if (props.pais === "todos") {
      return true;
    } else {
      return hotel.country.toLowerCase() === props.pais.toLowerCase();
    }
  });

  const hotelesFiltradoPorTamanioYPais = hotelesFiltradoPorPais.filter(
    (hotel) => {
      if (props.tamanio === "todos") {
        return true;
      } else {
        if (props.tamanio === "pequenio") {
          return hotel.rooms <= 10;
        } else if (props.tamanio === "mediano") {
          return hotel.rooms > 10 && hotel.rooms < 20;
        } else {
          return hotel.rooms >= 20;
        }
      }
    }
  );

  const hotelesFiltradoPorTamanioPaisYPrecio = hotelesFiltradoPorTamanioYPais.filter(
    (hotel) => {
      if (props.costo === "todos") {
        return true;
      } else {
        return hotel.price === parseInt(props.costo, 10);
      }
    }
  );

  const hotelesFiltradoPorTamanioPaisPrecioYFecha = hotelesFiltradoPorTamanioPaisYPrecio.filter(
    (hotel) => {
      if (props.fechaDesde === "" || props.fechaHasta === "") {
        return hotel;
      } else if (
        hotel.availabilityFrom / 1000 >=
          new Date(props.fechaDesde).getTime() / 1000 &&
        hotel.availabilityTo / 1000 >=
          new Date(props.fechaHasta).getTime() / 1000
      ) {
        return hotel;
      }
    }
  );
  let variable = hotelesFiltradoPorTamanioPaisPrecioYFecha.map((hotel) => {
    return (
      <HotelInfo
        availabilityFrom={hotel.availabilityFrom}
        availabilityTo={hotel.availabilityTo}
        city={hotel.city}
        country={hotel.country}
        description={hotel.description}
        name={hotel.name}
        photo={hotel.photo}
        price={hotel.price}
        rooms={hotel.rooms}
      />
    );
  });
  if (variable.length !== 0) {
    return <div className="contenedorHoteles">{variable}</div>;
  } else {
    return <p className="parrafoError">No existe disponibilidad de hoteles</p>;
  }
}
