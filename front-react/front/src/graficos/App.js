import {useEffect,useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "../componentes/PrivateRoute";
import PublicRoute from "../componentes/PublicRouter";
import { auth } from "../conexiones/firebase/firebase";
import CrearProducto from "./paginas/CrearProducto";
import InicioSesion from "./paginas/InicioSesion";
import Tablero from "./paginas/Tablero";


function App() {

  const [autenticado, setautenticado] = useState(false)

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if(user){
        setautenticado(true);
      }
      else{
        setautenticado(false);
      }
      
      console.log(auth().currentUser)
    })
}, [])


  return (
    <Router>
      <Switch>
        
        <PublicRoute exact path={"/"} authenticated={autenticado} component={InicioSesion} />
        <PrivateRoute exact path={"/principal"} authenticated={autenticado} component={Tablero}/>
        <PrivateRoute exact path={"/crear"} authenticated={autenticado} component={CrearProducto} />
      </Switch>
    </Router>
  );
}

export default App;
