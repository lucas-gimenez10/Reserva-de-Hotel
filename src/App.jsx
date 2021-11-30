import "./App.css";
import React, { useState } from "react";
import { Hoteles } from "./Hoteles/Hoteles";
import { Header } from "./Header/Header";
import { Filters } from "./Filters/Filters";

function App() {
  const [fechaDesde, setFechaDesde] = useState("");
  const [fechaHasta, setFechaHasta] = useState("");
  const [pais, setPais] = useState("todos");
  const [tamanio, setTamanio] = useState("todos");
  const [costo, setCosto] = useState("todos");

  return (
    <div className="App">
      <Header
        fechaDesde={fechaDesde}
        fechaHasta={fechaHasta}
        pais={pais}
        tamanio={tamanio}
        costo={costo}
      />
      <Filters
        fechaDesde={fechaDesde}
        setFechaDesde={setFechaDesde}
        fechaHasta={fechaHasta}
        setFechaHasta={setFechaHasta}
        pais={pais}
        setPais={setPais}
        tamanio={tamanio}
        setTamanio={setTamanio}
        costo={costo}
        setCosto={setCosto}
      />
      <Hoteles
        pais={pais}
        costo={costo}
        tamanio={tamanio}
        fechaDesde={fechaDesde}
        fechaHasta={fechaHasta}
      />
    </div>
  );
}

export default App;
