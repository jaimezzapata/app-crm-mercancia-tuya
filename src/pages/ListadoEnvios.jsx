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
        let user = usuarios.find(
            (item) => getName == item.user && getPassword == item.password
        );
        return user;
    }

    return (
        <div>ListadoEnvios</div>
    )
}

export default ListadoEnvios