import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { alertaGenerica } from "../helpers/funciones";
let urlEnvios = "https://back-json-server-tuya-14tp.onrender.com/envios";

function ListadoEnvios() {
  const [envios, setEnvios] = useState([]);

  function getEnvios() {
    fetch(urlEnvios)
      .then((response) => response.json())
      .then((data) => setEnvios(data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getEnvios();
  }, []);

  function filtrarEnvios() {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    let filtrado = envios.filter((item) => item.idUsuario === usuario.id);
    return filtrado;
  }
  let filtradoUsuario = filtrarEnvios();

  function eliminarEnvio(id) {
    fetch(urlEnvios + "/" + id, {
      method: "DELETE",
    })
      .then(() => {
        alertaGenerica(
          "Envío eliminado",
          "El envío ha sido eliminado correctamente",
          "success"
        );
        getEnvios();
      })
      .catch((error) =>
        alertaGenerica("Error", error + "No se pudo eliminar el envío", "error")
      );
  }

  return (
    <div className="cards">
      {filtradoUsuario.length > 0 ? (
        filtradoUsuario.map((envio) => (
          <div className="card" key={envio.id}>
            <p className="card__descripcion">
              Descripción: {envio.descripcion}
            </p>
            <p className="card__fecha">Fecha: {envio.fecha}</p>
            <h3 className="card__titulo">Origen: {envio.origen}</h3>
            <h3 className="card__titulo">Destino: {envio.destino}</h3>
            <h3 className="card__titulo">Estado: {envio.estado}</h3>
            <div className="card__buttons">
              <button
                onClick={() => eliminarEnvio(envio.id)}
                className="card__button"
              >
                Eliminar
              </button>
              <Link to={"/home/editar-envio/" + envio.id} className="card__button">
                Editar
              </Link>
            </div>
          </div>
        ))
      ) : (
        <h3 className="">No hay envíos para este usuario.</h3>
      )}
    </div>
  );
}

export default ListadoEnvios;
