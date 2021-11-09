import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CrearProducto from "./paginas/CrearProducto";
import Principal from "./paginas/Principal";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Principal} />
        <Route exact path={"/crear"} component={CrearProducto} />
      </Switch>
    </Router>
  );
}

export default App;
