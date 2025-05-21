import { useEffect, useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { alertaGenerica, alertaRedireccion } from '../helper/funciones'
export default function Register(){
   let urlUsers ="https://backjsonserverk.onrender.com/usuarios"

    const [getName, setName]=useState("")
    const [getPassword, setPassword]=useState("")
    const [getUser, setUser]=useState("")
    const [Usuarios, setUsuarios]=useState([])
    let redireccion = useNavigate()

    function getUsuarios(){
      fetch(urlUsers)
        .then(response => response.json())
        .then(data => setUsuarios(data))
        .catch(error => console.log(error))
    }
    useEffect(()=>{
      getUsuarios()
    },[])



    function findUser(){
      let user = Usuarios.find((item)=> getUser == item.user)
      console.log(user)
      return user;
    }

    function RegistrarUsuario(){
        if (!findUser()){
            let nuevoUsuario={
                nombre: getName,
                user: getUser,
                password: getPassword
            }
            fetch(urlUsers, {
                method: "POST",
                body: JSON.stringify(nuevoUsuario)
            }).then(()=>{
                getUsuarios()
            })
            alertaRedireccion(redireccion, "Usuario Registrado", "Sera redireccionado al login", "success", "/")
        }else{
            alertaGenerica("Error", "Usuario y/o Contraseña ya existente", "error")
        }
    }


    return(
        <>
      <div className="container">
        <input type="checkbox" id="signup_toggle" />
        <form className="form">
          <div className="form_front">
            <div className="form_details">Registro</div>
            <input onChange={(e) => setName(e.target.value)} placeholder="Name" className="input" type="text" />
            <input onChange={(e) => setUser(e.target.value)} placeholder="User" className="input" type="text" />
            <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="input" type="text" />
            <button onClick={RegistrarUsuario} type='button' className="btn">Registrar</button>
          <Link to="/">¿Ya tienes cuenta?</Link>
          </div>
        </form>
      </div>
        </>
    )
}