import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
function Login() {

  /* Definir un arreglo de 5 usuarios y validar el inicio de sesión para cada uno */

  const [getName, setName] = useState("")
  const [getPassword, setPasword] = useState("")
  let redireccion = useNavigate()

  function iniciarSesion(user, password) {
    if (user === 'admin' && password === '123456') {
      redireccion('/home')
    } else {
      alert('Error de credenciales')
    }
  }

  return (
    <form className="form">
      Sign Up
      <input onChange={(e) => setName(e.target.value)} type="text" className="input" placeholder="Name" />
      <input onChange={(e) => setPasword(e.target.value)} type="text" className="input" placeholder="Password" />
      <button onClick={() => iniciarSesion(getName, getPassword)} type='button'>Submit</button>
    </form>
  )
}

export default Login