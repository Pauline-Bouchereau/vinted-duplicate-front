import logoVinted from "../assets/img/logo-vinted.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className="container">
      <img src={logoVinted} alt="Logo Vinted" />
      <form>
        <div>
          <FontAwesomeIcon icon="search" />
          <input type="text" />
        </div>
      </form>
      <div>
        <button>Sinscrire</button>
        <button>Se connecter</button>
      </div>
      <button>Vends tes articles</button>
    </header>
  );
};

export default Header;
