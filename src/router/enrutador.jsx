/* El enrutador es un arreglo de objetos */
/* El objeto se construye con el componente y la ruta */
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RutaProtegida from "../components/RutaProtegida";
import CrearEnvio from "../pages/CrearEnvio";
import ListadoEnvio from "../pages/ListadoEnvio";
export let enrutador = [
  {
    path: '/home/',
    element: <RutaProtegida proteger= {<Home />}/>,
    children: [
      {
        path: 'crear-envio',
        element: <CrearEnvio/>
      },
      {
        path: 'listar',
        element: <ListadoEnvio/>
      }
    ]
  },
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register/>
  }
]
