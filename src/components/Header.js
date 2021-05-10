import logoVinted from "../assets/img/logo-vinted.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link, useHistory } from "react-router-dom";

const Header = ({ userToken, setUser }) => {
  const history = useHistory();
  return (
    <header className="container">
      <Link to="/">
        <img src={logoVinted} alt="Logo Vinted" />
      </Link>

      <form>
        <div>
          <FontAwesomeIcon className="icon" icon="search" />
          <input type="text" />
        </div>
      </form>
      {userToken ? (
        <button onClick={() => setUser(null)}>Se déconnecter</button>
      ) : (
        <div>
          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>

          <Link to="login">
            <button>Se connecter</button>
          </Link>
        </div>
      )}

      <button
        onClick={() => {
          history.push("/publish");
        }}
      >
        Vends tes articles
      </button>
    </header>
  );
};

export default Header;
