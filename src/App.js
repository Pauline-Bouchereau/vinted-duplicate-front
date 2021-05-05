import "./App.css";
// Import Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import Containers
import Home from "./containers/Home";
import Offer from "./containers/Offer";

// Import FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

// ------------------------------------------------------
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/offer">
          <Offer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
