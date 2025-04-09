import { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { alertaGenerica, alertaRedireccion, generarToken } from '../helper/funciones'
export default function Login(){

    const [getUsername, setUsername]=useState("")
    const [getPassword, setPassword]=useState("")
    let redireccion = useNavigate()

    

    function iniciarSesion(username, password){
        if (username === 'admin' && password === '123456'){
          let tokenAcceso = generarToken()
          localStorage.setItem("token", tokenAcceso)
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
            <button onClick={() => iniciarSesion(getUsername, getPassword)} type='button' className="btn">Login</button>
            <span className="switch">Don't have an account? 
              <label className="signup_tog" htmlFor="signup_toggle">
                Sign Up
              </label>
            </span>
          </div>
          <div className="form_back">
            <div className="form_details">SignUp</div>
            <input placeholder="Firstname" className="input" type="text" />
            <input placeholder="Username" className="input" type="text" />
            <input placeholder="Password" className="input" type="text" />
            <input placeholder="Confirm Password" className="input" type="text" />
            <button className="btn">Signup</button>
            <span className="switch">Already have an account? 
              <label className="signup_tog" htmlFor="signup_toggle">
                Sign In
              </label>
            </span>
          </div>
        </form>
      </div>
        </>
    )
}