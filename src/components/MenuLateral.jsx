import { Link, useNavigate } from "react-router-dom"
import { alertaRedireccion } from "../helpers/funciones"

const MenuLateral = () => {
  let redireccion = useNavigate()
  let usuario = JSON.parse(localStorage.getItem("usuario"))
  
  function cerrarSesion() {
    localStorage.removeItem("token")
    localStorage.removeItem("usuario")
    alertaRedireccion(redireccion, "La virgen l@s acompañe", "Por la sombrinta y sin hablar con extraños. Loviu y bai", "info", "/")
  }
  return (
    <aside className="aplicacion__menu-lateral">
      <h1 className="aplicacion__menu-lateral-logo">Track <span className="aplicacion__menu-lateral-logo--resaltado">X</span></h1>
      <h2>Usuario: {usuario.nombre}</h2>
      <img className="aplicacion__menu-lateral-logo-imagen" src="/logo.jpg" alt="Logo" />
      <nav className="aplicacion__menu-lateral-navegacion">
        <Link className="aplicacion__menu-lateral-navegacion-item" to="">Inicio</Link>
        <Link className="aplicacion__menu-lateral-navegacion-item" to="/home/crear-envio">Registrar Envío</Link>
        <Link className="aplicacion__menu-lateral-navegacion-item" to="/home/listar-envios">Gestión de envíos</Link>
        <Link className="aplicacion__menu-lateral-navegacion-item" to="">Gestión de clientes</Link>
        <button onClick={cerrarSesion} type='button' className="aplicacion__menu-lateral-navegacion-item" to="/">Cerrar sesión</button>
      </nav>
    </aside>
  )
}

export default MenuLateral