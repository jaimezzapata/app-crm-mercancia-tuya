import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { alertaGenerica, alertaRedireccion } from "../helpers/funciones";
import "./CrearEnvio.css";
let urlEnvios = "https://back-json-server-tuya-14tp.onrender.com/envios";

function EditarEnvio() {
  const [getName, setName] = useState("");
  const [getOrigen, setOrigen] = useState("");
  const [getDestino, setDestino] = useState("");
  const [getFecha, setFecha] = useState("");
  const [getEstado, setEstado] = useState("");
  let redireccion = useNavigate();
  let { id } = useParams();

  function getEnvioId() {
    fetch(urlEnvios + "/" + id)
      .then((response) => response.json())
      .then((data) => {
        setName(data.descripcion);
        setOrigen(data.origen);
        setDestino(data.destino);
        setFecha(data.fecha);
        setEstado(data.estado);
      })
      .catch(() => {
        alertaGenerica("Error", "No se pudo obtener el envio", "error");
      });
  }

  useEffect(() => {
    getEnvioId();
  }, []);

  function editarEnvio() {
    let nuevoEnvio = {
      descripcion: getName,
      origen: getOrigen,
      destino: getDestino,
      fecha: getFecha,
      estado: getEstado,
    };
    fetch(urlEnvios + "/" + id, {
      method: "PATCH",
      body: JSON.stringify(nuevoEnvio),
    })
      .then(() => {
        alertaRedireccion(
          redireccion,
          "Envio Editado",
          "Será redireccionado al listado",
          "success",
          "/home/listar-envios"
        );
      })
      .catch(() => {
        alertaGenerica("Error", "No se pudo editar el envio", "error");
      });
  }
  return (
    <form className="form">
      Sign Up
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="input"
        placeholder="Name"
        value={getName}
      />
      <input
        onChange={(e) => setOrigen(e.target.value)}
        type="text"
        className="input"
        placeholder="Origen"
        value={getOrigen}
      />
      <input
        onChange={(e) => setDestino(e.target.value)}
        type="text"
        className="input"
        placeholder="Destino"
        value={getDestino}
      />
      <input
        onChange={(e) => setFecha(e.target.value)}
        type="date"
        className="input"
        placeholder="Fecha"
        value={getFecha}
      />
      <select
        value={getEstado}
        name=""
        id=""
        onChange={(e) => setEstado(e.target.value)}
      >
        <option value="">Seleccione...</option>
        <option value="Pendiente">Pendiente</option>
        <option value="Creado">Creado</option>
        <option value="Cancelado">Cancelado</option>
        <option value="Finalizado">Finalizado</option>
      </select>
      <button onClick={editarEnvio} type="button">
        Submit
      </button>
      <Link to="/">Cancelar</Link>
    </form>
  );
}

export default EditarEnvio;
