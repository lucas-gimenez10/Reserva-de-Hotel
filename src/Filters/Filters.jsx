import React, { useState } from "react";
import "./Filters.css";

export function Filters(props) {
  const manejarClick = () => {
    props.setPais("todos");
    props.setTamanio("todos");
    props.setCosto("todos");
    props.setFechaDesde("");
    props.setFechaHasta("");
  };

  const FechaDesde = () => {
    const manejarCambio = (e) => {
      props.setFechaDesde(e.target.value);
    };

    return (
      <input value={props.fechaDesde} onChange={manejarCambio} type="date" />
    );
  };

  const FechaHasta = () => {
    const manejarCambio = (e) => {
      props.setFechaHasta(e.target.value);
    };

    return (
      <input value={props.fechaHasta} onChange={manejarCambio} type="date" />
    );
  };

  const SelectPais = () => {
    const manejarCambio = (e) => {
      props.setPais(e.target.value);
    };
    return (
      <select onChange={manejarCambio} value={props.pais} name="Paises">
        <option value="todos">Todos los Paises</option>
        <option value="Argentina">Argentina</option>
        <option value="Chile">Chile</option>
        <option value="Uruguay">Uruguay</option>
        <option value="Brasil">Brasil</option>
      </select>
    );
  };

  const SelectTamanio = () => {
    const manejarCambio = (e) => {
      props.setTamanio(e.target.value);
    };
    return (
      <select onChange={manejarCambio} value={props.tamanio} name="tamanios">
        <option value="todos">Todos los Tamaños</option>
        <option value="pequenio">Pequeño</option>
        <option value="mediano">Mediano</option>
        <option value="grande">Grande</option>
      </select>
    );
  };

  const SelectCosto = () => {
    const manejarCambio = (e) => {
      props.setCosto(e.target.value);
    };
    return (
      <select onChange={manejarCambio} value={props.costo} name="Costos">
        <option value="todos">Todos los Costos</option>
        <option value="1">Económico</option>
        <option value="2">Confort</option>
        <option value="3">Lujos</option>
        <option value="4">Magnífico</option>
      </select>
    );
  };

  return (
    <>
      <div className="contenedorFilters">
        <FechaDesde />
        <FechaHasta />
        <SelectPais />
        <SelectTamanio />
        <SelectCosto />

        <button onClick={manejarClick} className="boton">
          <i className="far fa-trash-alt iconoTacho"></i>
          Limpiar
        </button>
      </div>
    </>
  );
}
