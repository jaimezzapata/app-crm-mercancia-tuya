import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { alertaGenerica } from '../helper/funciones'
let urlEnvios ="https://backjsonserverk.onrender.com/envios"

export default function ListadoEnvio(){
const [envios, setEnvios] = useState([])

function getEnvios(){
      fetch(urlEnvios)
        .then(response => response.json())
        .then(data => setEnvios(data))
        .catch(error => console.log(error))
    }

    useEffect(()=>{
      getEnvios()
    },[])

    function filtrarEnvios(){
      let user = getUser.find((item)=> getUsername == item.user && getPassword == item.password)
      return user;
    }

return(
    <div>Listado Envios</div>
)
}