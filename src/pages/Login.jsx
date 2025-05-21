import { useEffect, useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { alertaGenerica, alertaRedireccion, generarToken } from '../helper/funciones'
export default function Login(){
   let urlUsers ="https://backjsonserverk.onrender.com/usuarios"

    const [getUsername, setUsername]=useState("")
    const [getPassword, setPassword]=useState("")
    const [getUser, setUser]=useState([])
    let redireccion = useNavigate()

    function getUsuarios(){
      fetch(urlUsers)
        .then(response => response.json())
        .then(data => setUser(data))
        .catch(error => console.log(error))
    }
    useEffect(()=>{
      getUsuarios()
    },[])



    function findUser(){
      let user = getUser.find((item)=> getUsername == item.user && getPassword == item.password)
      return user;
    }

    function iniciarSesion(){
        if (findUser){
          let tokenAcceso = generarToken()
          localStorage.setItem("token", tokenAcceso)
          localStorage.setItem("usuario", JSON.stringify(findUser()))
            alertaRedireccion(redireccion, "Bienvenido", "Sera redireccionado al home", "success", "/home")
        }else{
            alertaGenerica("Error", "Usuario y/o Contraseña incorrecto", "error")
        }
    }


    return(
        <>
      <div className="container">
        <input type="checkbox" id="signup_toggle" />
        <form className="form">
          <div className="form_front">
            <div className="form_details">Login</div>
            <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="input" type="text" />
            <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="input" type="text" />
            <button onClick={iniciarSesion} type='button' className="btn">Login</button>
            <Link to="/register">¿No tienes cuenta?</Link>
          </div>
          </form>
      </div>
        </>
    )
}