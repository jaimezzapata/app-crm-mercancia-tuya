import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    alertaGenerica,
    alertaRedireccion,
} from "../helpers/funciones";
import "./CrearEnvio.css";
let urlEnvios = "https://back-json-server-tuya-14tp.onrender.com/envios";

function CrearEnvio() {
    const [getName, setName] = useState("");
    const [getOrigen, setOrigen] = useState("");
    const [getDestino, setDestino] = useState("");
    const [getFecha, setFecha] = useState("");
    const [getEstado, setEstado] = useState("");
    let redireccion = useNavigate();

    function registrarEnvio() {
        let usuarioLogueado = JSON.parse(localStorage.getItem("usuario"))
        let nuevoEnvio = {
            nombre: getName,
            origen: getOrigen,
            destino: getDestino,
            fecha: getFecha,
            estado: getEstado,
            idUsuario: usuarioLogueado.id
        }
        fetch(urlEnvios, {
            method: "POST",
            body: JSON.stringify(nuevoEnvio)
        }).then(() => {
            alertaRedireccion(
                redireccion,
                "Envio registrado",
                "Será redireccionado al listado",
                "success",
                "/"
            );
        }).catch(() => {
            alertaGenerica("Error", "No se pudo registrar el envio", "error")
        })

    }

    return (
        <form className="form">
            Sign Up
            <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="input"
                placeholder="Name"
            />
            <input
                onChange={(e) => setOrigen(e.target.value)}
                type="text"
                className="input"
                placeholder="Origen"
            />
            <input
                onChange={(e) => setDestino(e.target.value)}
                type="text"
                className="input"
                placeholder="Destino"
            />
            <input
                onChange={(e) => setFecha(e.target.value)}
                type="date"
                className="input"
                placeholder="Fecha"
            />
            <select name="" id="" onChange={(e) => setEstado(e.target.value)}>
                <option value="">Seleccione...</option>
                <option value="Pendiente">Pendiente</option>
                <option value="Creado">Creado</option>
                <option value="Cancelado">Cancelado</option>
                <option value="Finalizado">Finalizado</option>
            </select>
            <button onClick={registrarEnvio} type="button">
                Submit
            </button>
            <Link to="/">Cancelar</Link>
        </form>
    );
}

export default CrearEnvio;
