import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    alertaGenerica,
    alertaRedireccion,
} from "../helpers/funciones";
import "./Registro.css";
let urlUsuarios = "https://back-json-server-tuya-14tp.onrender.com/usuarios";

function Registro() {
    const [getName, setName] = useState("");
    const [getPassword, setPasword] = useState("");
    const [getUser, setUser] = useState("");
    const [usuarios, setUsuarios] = useState([]);
    let redireccion = useNavigate();

    function getUsuarios() {
        fetch(urlUsuarios)
            .then((response) => response.json())
            .then((data) => setUsuarios(data))
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getUsuarios();
    }, []);

    function buscarUsuario() {
        let user = usuarios.find(
            (item) => getUser == item.user);
        return user;
    }

    function registrarUsuario() {
        if (!buscarUsuario()) {
            let nuevoUsuario = {
                nombre: getName,
                user: getUser,
                password: getPassword
            }
            fetch(urlUsuarios, {
                method: "POST",
                body: JSON.stringify(nuevoUsuario)
            }).then(() => {
                getUsuarios()
            })
            alertaRedireccion(
                redireccion,
                "Usuario registrado",
                "Será redireccionado login",
                "success",
                "/"
            );
        } else {
            alertaGenerica("Error", "Usuario ya existe en la base de datos", "error");
        }
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
                onChange={(e) => setPasword(e.target.value)}
                type="text"
                className="input"
                placeholder="Password"
            />
            <input
                onChange={(e) => setUser(e.target.value)}
                type="text"
                className="input"
                placeholder="Usuario"
            />
            <button onClick={registrarUsuario} type="button">
                Submit
            </button>
            <Link to="/" >¿Ya tiene una cuenta?</Link>
        </form>
    );
}

export default Registro;
