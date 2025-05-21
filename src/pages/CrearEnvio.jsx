import { useState } from 'react'
import './CrearEnvio.css'
import { Link, useNavigate } from 'react-router-dom'
import { alertaGenerica, alertaRedireccion } from '../helper/funciones'

export default function CrearEnvio(){
let urlEnvios ="https://backjsonserverk.onrender.com/envios"

    const [getName, setName]=useState("")
    const [getOrigen, setOrigen]=useState("")
    const [getDestino, setDestino]=useState("")
    const [getFecha, setFecha]=useState("")
    const [getEstado, setEstado]=useState("")
    let redireccion = useNavigate()

    function RegistrarEnvio(){
        let usuarioLogueado = JSON.parse(localStorage.getItem("usuario"))
            let nuevoEnvio={
                nombre: getName,
                origen: getOrigen,
                destino: getDestino,
                fecha: getFecha,
                estado: getEstado,
                idUser: usuarioLogueado.id
            }
            fetch(urlEnvios, {
                method: "POST",
                body: JSON.stringify(nuevoEnvio)
            }).then(()=>{
                alertaRedireccion(redireccion, "Envio Registrado", "Sera redireccionado al login", "success", "/home/")
            }).catch(()=>{
                alertaGenerica("Error", "No se pudo registrar el envio", "error")
            })
    }


    return(
        <>
      <div className="container">
        <input type="checkbox" id="signup_toggle" />
        <form className="form">
          <div className="form_front">
            <div className="form_details">Registro</div>
            <input onChange={(e) => setName(e.target.value)} placeholder="Name" className="input" type="text" />
            <input onChange={(e) => setOrigen(e.target.value)} placeholder="Origen" className="input" type="text" />
            <input onChange={(e) => setDestino(e.target.value)} placeholder="Destino" className="input" type="text" />
            <input onChange={(e) => setFecha(e.target.value)} placeholder="Fecha" className="input" type="date" />
            <select name="" id="" onChange={(e) => setFecha(e.target.value)}>
                <option value="">Seleccione</option>
                <option value="Pendiente">Pendiente</option>
                <option value="Creado">Creado</option>
                <option value="Cancelado">Cancelado</option>
                <option value="Finalizado">Finalizado</option>
            </select>
            <button onClick={RegistrarEnvio} type='button' className="btn">Registrar</button>
          <Link to="/home/">Cancelar</Link>
          </div>
        </form>
      </div>
        </>
    )
}