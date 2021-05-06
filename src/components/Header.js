import logoVinted from "../assets/img/logo-vinted.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

const Header = ({ userToken, setUser }) => {
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

      <button>Vends tes articles</button>
    </header>
  );
};

export default Header;
