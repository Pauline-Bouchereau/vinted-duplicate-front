import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";

// Import Containers/Components
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import SignUp from "./containers/SignUp";
import LogIn from "./containers/LogIn";
import Publish from "./containers/Publish";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./containers/NotFound";
import Payment from "./containers/Payment";

// Import FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faHeart,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
library.add(faSearch, faHeart, faEye, faEyeSlash);

// ------------------------------------------------------
function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  const serverUrl = "https://vinted-duplicate.herokuapp.com";

  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 10 });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  return (
    <Router>
      <Header userToken={userToken} setUser={setUser} />
      <Switch>
        <Route path="/signup">
          <SignUp setUser={setUser} serverUrl={serverUrl} />
        </Route>
        <Route path="/login">
          <LogIn setUser={setUser} serverUrl={serverUrl} />
        </Route>
        <Route path="/publish">
          <Publish serverUrl={serverUrl} />
        </Route>
        <Route path="/offer/:id">
          <Offer serverUrl={serverUrl} />
        </Route>
        <Route exact path="/payment">
          <Payment userToken={userToken} serverUrl={serverUrl} />
        </Route>
        <Route exact path="/">
          <Home serverUrl={serverUrl} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
