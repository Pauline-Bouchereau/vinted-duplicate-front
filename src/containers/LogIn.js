import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LogIn = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [missingParameter, setMissingParameters] = useState(false);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://vinted-duplicate.herokuapp.com/user/login",
        { email: email, password: password }
      );
      const token = response.data.token;
      setUser(token);
      history.goBack();
    } catch (error) {
      console.log(error.response);
      if (error.response.data.status === "201") {
        setErrorMessage("Nom d'utilisateur et/ou mot de passe invalide(s)");
      } else {
        setErrorMessage("Une erreur est survenue, merci d'essayer à nouveau");
      }
    }
  };

  const handleClick = () => {
    setMissingParameters(true);
  };

  const handleClickIcon = () => {
    setVisiblePassword(!visiblePassword);
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h3>Se connecter</h3>
        <p>{errorMessage} </p>
        <input
          type="email"
          value={email}
          placeholder="Adresse email"
          onChange={(event) => setEmail(event.target.value)}
          onClick={handleClick}
        />
        {!email && missingParameter && (
          <p>Complète ces informations pour continuer</p>
        )}
        <div>
          <input
            type={visiblePassword ? "text" : "password"}
            value={password}
            placeholder="Mot de Passe"
            onChange={(event) => setPassword(event.target.value)}
            onClick={handleClick}
          />

          {visiblePassword ? (
            <FontAwesomeIcon
              className="eye"
              icon="eye-slash"
              onClick={handleClickIcon}
            />
          ) : (
            <FontAwesomeIcon
              className="eye"
              icon="eye"
              onClick={handleClickIcon}
            />
          )}
        </div>
        {!password && missingParameter && (
          <p>Complète ces informations pour continuer</p>
        )}

        <input
          type="submit"
          value="Se Connecter"
          disabled={!password || !email}
          className={!password || !email ? "disabled" : ""}
        />
        <Link replace to="/signup">
          Pas encore de compte ? Inscris-toi !
        </Link>
      </form>
    </main>
  );
};

export default LogIn;
