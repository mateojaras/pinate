import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CrearProducto from "./paginas/CrearProducto";
import Tablero from "./paginas/Tablero";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Tablero} />
        <Route exact path={"/crear"} component={CrearProducto} />
        
      </Switch>
    </Router>
  );
}

export default App;
