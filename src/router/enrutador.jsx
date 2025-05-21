/* El enrutador es un arreglo de objetos */
/* El objeto se construye con el componente y la ruta */
import Home from "../pages/Home";
import Login from "../pages/Login";
import RutaProtegida from "../components/RutaProtegida";
import Registro from "../pages/Registro";
import CrearEnvio from "../pages/CrearEnvio";
import ListadoEnvios from "../pages/ListadoEnvios";
export let enrutador = [
  {
    path: '/home/',
    element: <RutaProtegida proteger={<Home />} />,
    children: [
      {
        path: "crear-envio",
        element: <CrearEnvio />
      },
      {
        path: "listar-envios",
        element: <ListadoEnvios />
      }
    ]
  },
  {
    path: '/',
    element: <Login />
  },
  {
    path: "/registro",
    element: <Registro />
  }
]
